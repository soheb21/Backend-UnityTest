const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'buyer' },
    addresses: { type: [Schema.Types.Mixed] },
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;