// 1-mashq
let s = "hello";
console.log(s.split("").reverse().join(""));
// 2-mashq
let s = "level";
let rev = s.split("").reverse().join("");
console.log(s === rev);
// 3-mashq
let arr = [1,2,3];
let sum = arr.reduce((a,b)=>a+b,0);
console.log(sum);
// 4-mashq
let arr = [3,7,2];
console.log(Math.max(...arr));
// 5-mashq
let arr = [5,1,4];
arr.sort((a,b)=>a-b);
console.log(arr);
