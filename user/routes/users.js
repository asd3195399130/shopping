const express = require("express");
const router = express.Router();

const {
  getuserlist,
  getuseraddress,
  updateuserlist,
  deleteuserlist,
} = require("../Controller/userConroller");

router.get("/list", getuserlist);
router.post("/add", getuseraddress);
router.post("/update:id", updateuserlist);
router.delete("/delete:id", deleteuserlist);
module.exports = router;
