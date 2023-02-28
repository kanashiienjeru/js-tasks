// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

const getSecondsToTomorrow = () => {
    let date = new Date()
    return (24*3600) - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
}

console.log(getSecondsToTomorrow())