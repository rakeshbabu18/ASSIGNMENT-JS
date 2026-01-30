const marks = [78, 92, 35, 88, 40, 67];

let res1 = marks.filter(ele=>ele>=40)
console.log(res1)

let res2 = marks.map(ele=>ele+5)
console.log(res2)

let res3 = marks.reduce((accumulator,ele)=>(accumulator>ele)?accumulator:ele)
console.log(res3)

let res4 = marks.find(ele=>ele<40)
console.log(res4)

let res5 = marks.findIndex(ele=>ele===92)
console.log(res5)