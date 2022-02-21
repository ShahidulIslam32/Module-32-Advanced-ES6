// let and const 

let a = 20
a = 25
console.log(a);

const d = 10
console.log(d);

// template string

const one = 'rafiq'
const two = 'jabbar'
const three = 'salam'
const four = 20
const result = `they are our honable language martyar ${one}, ${two}, ${three}. i hats of them. they are very very unafraidable person. i give them salary ${four * 800000} taka if they are alived`
console.log(result);

// simple / single line -- Arrow Function 

const arrowTry = (numbers) => numbers * 2
const Updateresult = arrowTry(20)
console.log(Updateresult);

// big data / multiple line Arrow function

let bigData = (request) => {
    let x = 10;
    let y = 20;
    let z = 24;
    let outputOne = x + y + z
    return outputOne
}

let callFunc = bigData()
console.log(callFunc);

// Array Destructring 

const [One, Two, Three] = [20, 30, 54]
console.log(One, Two, Three);

const myObject = { a: 12, b: 20, x: 21, y: 10, z: 60, c: 'ami MERN Pari' }

const { c, y, b } = myObject
console.log(y, b, c);




