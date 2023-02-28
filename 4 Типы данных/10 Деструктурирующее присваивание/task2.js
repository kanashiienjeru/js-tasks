// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
const topSalary = obj => {
    let max = 0
    let res = null

    for(const [name, val] of Object.entries(obj)) {
        if (val > max) {
            max = val
            res = name
        }
    }
    return res

}
console.log(topSalary(salaries))