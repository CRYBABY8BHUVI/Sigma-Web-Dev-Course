const arr = [10,20,12,322,12];
console.log(arr);
console.log(typeof arr)
let arr2 = arr.map((Val) => {
    return Val*Val;
})
arr.sort((a,b)=>a-b);
console.log(arr);