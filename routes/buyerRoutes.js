const express = require("express");
const { fetchAllSellers, fetchOneSeller, createOrder } = require("../controller/buyerCtrl");
const authMiddlware = require("../middleware/authMiddlware");
const router = express.Router();
router.get("/list-of-sellers", authMiddlware, fetchAllSellers);
router.get("/seller-catalog/:seller_id", authMiddlware, fetchOneSeller);
router.post("/create-order/:seller_id", authMiddlware, createOrder);

module.exports = router;