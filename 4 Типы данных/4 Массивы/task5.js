// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
    let maxSum = 0
    let sum2 = 0
    for (let e of arr) { 
      sum2 += e
      maxSum = Math.max(maxSum, sum2)
      if (sum2 < 0) {
        sum2 = 0
      }
    }
    return maxSum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]))
