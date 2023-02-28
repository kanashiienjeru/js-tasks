// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

const sumSalaries = obj => Object.values(obj).reduce((acc, val) => acc += val, 0)
console.log( sumSalaries(salaries))