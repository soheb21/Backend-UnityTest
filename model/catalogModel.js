const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({

    //schema
    catalogName: { type: String, required: true },
    products: { type: [mongoose.Schema.Types.Mixed] },
    sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "user" }

})
const CatalogModel = mongoose.model("catalog", catalogSchema)
module.exports = CatalogModel;
