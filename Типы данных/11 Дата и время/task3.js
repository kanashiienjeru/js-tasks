// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
let date = new Date(2023, 1, 26);
const getLocalDay = date => {
    let day = date.getDay()
    if (day == 0) {
        date = 7
    }
    return day
}

console.log(getLocalDay(date))