const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    //schema
    items: [{ type: [mongoose.Schema.Types.Mixed], required: true }],
    totalAmount: { type: Number },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "pending" },
    getAddress: { type: [mongoose.Schema.Types.Mixed] },
    // seller_ID: { type: Object },

})
const OrderModel = mongoose.model("order", orderSchema)
module.exports = OrderModel;
