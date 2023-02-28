// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

const unique = arr => {
    let res = []
    arr.forEach(e => !res.includes(e) && res.push(e) )
    return res
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];

  console.log(unique(strings))
