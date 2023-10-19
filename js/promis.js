function getuser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { id: 1 };
      resolve(data);
    }, 1000);
  });
}

function getuser1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = { id: 1, name: "张三", age: 20, sex: "女" };
      resolve(res);
    }, 2000);
  });
}
async function getattr() {
  let data = await getuser();
  console.log(data);
  let res = await getuser1();
  console.log(res);
}
getattr();
