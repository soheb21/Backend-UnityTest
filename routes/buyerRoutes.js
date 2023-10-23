const express = require("express");
const { fetchAllSellers, fetchOneSeller, createOrder } = require("../controller/buyerCtrl");
const router = express.Router();
router.get("/list-of-sellers", fetchAllSellers);
router.get("/seller-catalog/:seller_id", fetchOneSeller);
router.post("/create-order/:seller_id", createOrder);

module.exports = router;