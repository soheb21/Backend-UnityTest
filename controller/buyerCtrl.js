const CatalogModel = require("../model/catalogModel");
const OrderModel = require("../model/orderModel");
const userModel = require("../model/userModel")

exports.fetchAllSellers = async (req, res) => {
    try {
        const allSellers = await userModel.find({ role: "seller" });
        res.status(201).json({
            success: true,
            message: "Feteched All Sellers Successfully",
            data: allSellers
        })

    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch All Sellers",
            error
        })
    }
}

exports.fetchOneSeller = async (req, res) => {
    try {
        const { seller_id } = req.params;
        const oneSeller = await CatalogModel.findOne({ sellerID: seller_id });
        res.status(201).json({
            success: true,
            message: "Feteched one Seller Successfully",
            data: oneSeller
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch One Sellers",
            error
        })
    }
}
exports.createOrder = async (req, res) => {
    try {
        const { seller_id } = req.params;
        const order = new OrderModel({ ...req.body, sellerID: seller_id });
        const doc = await order.save();
        res.status(201).json({
            success: true,
            message: "Order Created Successfully",
            data: doc
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to create order",
            error
        })
    }
}
