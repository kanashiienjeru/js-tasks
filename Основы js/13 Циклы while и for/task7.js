// Напишите код, который выводит все простые числа из интервала от 2 до n.

const n = 10

qwe:
for (let i = 2; i < n; i++) {
    for(let j = 2; j < i; j++) {
        if (i % j === 0) continue qwe
    }
    console.log(i)
}