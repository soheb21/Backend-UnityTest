const express = require("express");
const { fetchOrdertBySeller, createCatalog } = require("../controller/sellerCtrl");
const authMiddlware = require("../middleware/authMiddlware");
const router = express.Router();
router.get("/orders/:id", authMiddlware, fetchOrdertBySeller);
router.post("/create-catalog", authMiddlware, createCatalog)

module.exports = router;