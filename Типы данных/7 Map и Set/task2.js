// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.


const aclean = arr => {
    const res = {}

    for(let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join('')
        res[sorted] = arr[i]
    }

    return Object.values(res)
}
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );