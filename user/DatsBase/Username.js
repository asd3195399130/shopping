const connection = require("./db");

//查询
const getuser = (params) => {
  return new Promise((resolve, reject) => {
    const limit = (params.page - 1) * params.size;
    connection.query(
      `SELECT * FROM users LIMIT ${limit},${params.size}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
//添加
const getuseradd = (params) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO users (name, age, sex, birth_date) VALUES(?,?,?,?)`,
      [params.name, params.age, params.sex, params.birth_date],
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
//更新
const updateuser = (params, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE users SET name= ?,age= ?,sex= ?,birth_date= ? WHERE id=?`,
      [params.name, params.age, params.sex, params.birth_date, id],
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
//删除
const deleteuser = (id, param) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM users WHERE id=${id}`, param, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
module.exports = {
  getuser,
  getuseradd,
  updateuser,
  deleteuser,
};
