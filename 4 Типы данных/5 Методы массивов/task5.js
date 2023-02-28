// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
let arr = ["HTML", "JavaScript", "CSS"];
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

const copySorted = arr => [...arr].sort()