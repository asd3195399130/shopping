const express = require("express");
const router = express.Router();
const {
  getshopplistController,
  getshopPending,
  getshoppdrborn,
  gettolbalall,
} = require("../Controller/ShopplistController");

router.get("/list", getshopplistController);
router.get("/shopplist", getshopPending);
router.get("/orderlist", getshoppdrborn);
router.get("/total", gettolbalall);
module.exports = router;
