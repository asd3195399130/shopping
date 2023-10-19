const Connection = require("nodejs-websocket/Connection");
const connection = require("./db");

const getshopplist = (params) => {
  return new Promise((resolve, reject) => {
    const limit = (params.page - 1) * params.size;
    connection.query(
      `SELECT * FROM vipnum LIMIT ${limit},${params.size}`,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

const getshopmsg = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM order_goods", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
const getshoppdrbor = (params) => {
  return new Promise((resolve, reject) => {
    let limit = (params.page - 1) * params.size;
    connection.query(
      `SELECT * FROM order_msg LIMIT ${limit},${params.size}`,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};
const gettolbalol = (params) => {
  return new Promise((resolve, reject) => {
    let limit = (params.page - 1) * params.size;
    connection.query(
      `SELECT * FROM total LIMIT ${limit},${params.size}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
module.exports = {
  getshopplist,
  getshopmsg,
  getshoppdrbor,
  gettolbalol,
};
