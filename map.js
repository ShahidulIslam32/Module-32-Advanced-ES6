const numbers = [10, 15, 20, 22]
const DoubleIt = number => number * 2

const output = numbers.map(DoubleIt)
const outputOne = numbers.map(number => number * 2)
const outputTwo = numbers.map(s => s * 2)
console.log(output,outputOne,outputTwo);