const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter() to get only inStock products
let res1 = cart.filter(ele=>ele.inStock)
console.log(res1)

//map() to create a new array with:  { name, totalPrice }
let res2 = cart.map(ele=>{
    return{
        name:ele.name,
        totalPrice:ele.price*ele.quantity
    }
})
console.log(res2)

//reduce() to calculate grand total cart value
let res3 = Object.values(cart).reduce((acc,ele)=>acc+(ele.price*ele.quantity),0)
console.log(res3)

//find() to get details of "Mouse"
let res4 = cart.find(ele=>ele.name==="Mouse")
console.log(res4)

//findIndex() to find the position of "Keyboard"
let res5 = cart.findIndex(ele=>ele.name==="Keyboard")
console.log(res5)