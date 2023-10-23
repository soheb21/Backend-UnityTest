const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    //schema
    items: { type: [mongoose.Schema.Types.Mixed], required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "pending" },
    getAddress: { type: [mongoose.Schema.Types.Mixed] },
    sellerID: { type: String }

})
const OrderModel = mongoose.model("order", orderSchema)
module.exports = OrderModel;
