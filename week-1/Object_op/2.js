const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let sum = 0
let max =-1
for(let v of Object.values(marks))
{
    sum+=v
    if(v>max)
        max=v
}
console.log("Average:",sum/4)
console.log("Max marks:",max)
marks.computer=90
console.log(marks)