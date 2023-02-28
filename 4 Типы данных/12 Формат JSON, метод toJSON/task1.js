// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

user = JSON.stringify(user)
let userobj = JSON.parse(user)
console.log(user)
console.log(userobj)