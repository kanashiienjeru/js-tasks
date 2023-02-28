// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

const camelize = str => {
    return str
    .split('-')
    .map((e,i) => i == 0 ? e : e[0].toUpperCase() + e.slice(1))
    .join('')
}

console.log(camelize("background-color"))