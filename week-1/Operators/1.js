function bill(a)
{
    a+=500
    a+=1200
    a-=200
    let gst = 0.18*a
    a+=gst
    console.log(a)
}
let initialamount = 0
bill(initialamount)