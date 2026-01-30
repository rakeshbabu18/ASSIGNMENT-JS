/*
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss */

let date = new Date()

//current date & time
console.log(date.toString())

//year
let y = date.getFullYear()
console.log(date.getFullYear())

//month
let m = date.getMonth()
console.log(date.getMonth())

//date
let d = date.getDate()
console.log(date.getDate())

//day
console.log(date.getDay())

//hours,minutes,seconds
let h = date.getHours()
let min = date.getMinutes()
let s = date.getSeconds()

console.log("Hours:",date.getHours(),"Minutes:",date.getMinutes(),date.getSeconds())

//Displaying Date format in DD-MM-YYYY and time in format HH:mm:ss
console.log(d,"-",m,"-",y," ",h,":",min,":",s)


