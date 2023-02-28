function Accumulator(startingValue) {
    this.value = startingValue
    this.read = (val) => {
        this.value += +prompt('Введите число', '')
    }
}

