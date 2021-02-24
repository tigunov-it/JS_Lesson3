'use strict'
let numbers = [];
for (let i = 0; i <= 10; i++) {
    numbers.push(i)
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    let ostat = numbers[i] % 2
    if (ostat === 0 && numbers[i] != 0) {
        numbers[i] += " - Это четное число"
    }
    if (ostat === 1) {
        numbers[i] += " - Это нечетное число"
    }
    if (ostat === 0 && numbers[i] === 0) {
        numbers[i] += " - Это ноль"
    }
}
console.log(numbers);



