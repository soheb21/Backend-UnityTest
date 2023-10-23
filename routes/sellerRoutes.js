const express = require("express");
const { fetchOrdertBySeller, createCatalog } = require("../controller/sellerCtrl");
const router = express.Router();
router.get("/orders",fetchOrdertBySeller);
router.post("/create-catalog",createCatalog)

module.exports = router;