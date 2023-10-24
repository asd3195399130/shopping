const express = require("express");
const app = express.Router();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
const {
  getuser,
  getuseradd,
  updateuser,
  deleteuser,
} = require("../DatsBase/Username");
//查询用户
const getuserlist = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 5;
  getuser({ page, size })
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
//添加用户
const getuseraddress = (req, res, next) => {
  getuseradd(req.body)
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
//更新用户
const updateuserlist = (req, res, next) => {
  updateuser(req.params.id, req.body)
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
//删除
const deleteuserlist = (req, res, next) => {
  deleteuser(req.params.id, req.body)
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
module.exports = {
  getuserlist,
  getuseraddress,
  updateuserlist,
  deleteuserlist,
};
