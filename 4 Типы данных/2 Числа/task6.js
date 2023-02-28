// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

const randomInteger = (min,max) => {
    let num = min + Math.random() * (max+1-min)
    return Math.floor(num)
}
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))
console.log(randomInteger(1,5))