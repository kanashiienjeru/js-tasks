function Calculator() {
    this.read = () => {
        this.a = +prompt('введите первое число', '')
        this.b = +prompt('введите второе число', '')
    }
    this.sum = () => this.a + this.b
    this.mul = () => this.a * this.b
}