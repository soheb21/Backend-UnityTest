const CatalogModel = require("../model/catalogModel");
const OrderModel = require("../model/orderModel");

exports.createCatalog = async (req, res) => {
    try {
        // One seller can have one catalog
        const existingSeller= await CatalogModel.findOne({sellerID:req.body.sellerID})
        if (existingSeller) {
            return res.status(200).send({ message: "Sellor Already Exist", success: false })
        }
        const addCatalog = new CatalogModel(req.body);
        const doc = await addCatalog.save();
        res.status(201).json({
            success: true,
            message: "Catalog created Successfully",
            data: doc
        })
    } catch (error) {
        console.log("create-catalog Error", error)
        res.status(501).json({ success: false, message: "Failed to craete catalog", error })
    }
}
exports.fetchOrdertBySeller = async (req, res) => {

    try {
        //now each seller recived order seperately.
        const { id } = req.params;
        const order = await OrderModel.find({ sellerID: id })
        res.status(201).json({
            success: true,
            message: "Feteched user orders Successfully",
            data: order
        })
    } catch (error) {
        console.log("Feetching Error", error)
        res.status(501).json({ success: false, message: error.message })
    }
}