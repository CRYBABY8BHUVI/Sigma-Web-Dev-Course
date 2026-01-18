let arr = []
let v = prompt("enter the length of the array : ");
for(let i = 1;i<=v;i++){
    arr.push(i);
}
let mult = (a,b) =>{
    return a*b;
}
alert(arr.reduce(mult));
