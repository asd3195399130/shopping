const express = require("express");
const app = express.Router();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
const {
  getshopplist,
  getshopmsg,
  getshoppdrbor,
  gettolbalol,
} = require("../Database/Shoppinglist");

const getshopplistController = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 5;
  getshopplist({ page, size })
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getshopPending = (req, res, next) => {
  getshopmsg().then((response) => {
    let result = {
      code: 200,
      msg: "success",
      data: response,
    };
    res.send(result);
  });
};
const getshoppdrborn = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 5;
  getshoppdrbor({ page, size })
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const gettolbalall = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 5;
  gettolbalol({ page, size })
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = {
  getshopplistController,
  getshopPending,
  getshoppdrborn,
  gettolbalall,
};
