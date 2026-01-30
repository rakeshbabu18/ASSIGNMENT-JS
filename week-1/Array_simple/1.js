const temperatures = [32, 35, 28, 40, 38, 30, 42]

let res1 = temperatures.filter(ele=>ele>35)
console.log(res1)

let res2 = temperatures.map(ele=>(ele=(9*ele)/5)+32)
console.log(res2)

let res3 = temperatures.reduce((accumulator,ele)=>accumulator+ele)
console.log(res3/temperatures.length)

let res4 = temperatures.find(ele=>ele>40)
console.log(res4)

let res5 = temperatures.findIndex(ele=>ele===28)
console.log(res5)