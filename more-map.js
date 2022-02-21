
// const friends = ['tomy', 'jerry', 'jacky', 'gates', 'tedy']
// const fLength = friends.map(shovon => shovon.length * 2)
// console.log(fLength);

// many products 

const products = [
    {name: 'Monitor',   price: 20000,   color: 'Black'},
    {name: 'Mobile',    price: 10000,   color: 'red'},
    {name: 'Headphone', price: 200,     color: 'golden'},
    {name: 'Bike',      price: 220000,  color: 'green'},
    {name: 'Keyboard',  price: 1500,    color: 'perple'}
]



const findProducts    = products.map(find => find.name)
const findProductsOne = products.map(find => find.price)
const findProductsTwo = products.map(find => find.color)
console.log(findProducts, findProductsOne, findProductsTwo);







// output = []
// for(let product of products){
//     let result = product
//     output.push(result)
    
// }
// console.log(output);