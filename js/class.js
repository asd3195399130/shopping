class fun {
  constructor() {
    this.name = "李四";
    this.age = 16;
    this.sex = "男";
  }
  say() {
    return this.age;
  }
  asyage(age, sex) {
    this.age = age;
    this.sex = sex;
  }
}

let uer = new fun();
uer.asyage(18, "女");
console.log(uer);
// console.log(age);
