// console.log("b :", b);
// var b = 20;

// let a = 10;
// console.log("a :", a);

f1(); //==> its work
f2(); //==> throw

// function fun1(params) {
//     console.log("====>>");    
// }
// const fun2 = (params) => {
//     console.log("====>>");    
// };

// fun1(); // ==>its work
// fun2(); // ==>its work
let x;  // all ind permit
{
    x = 10;
    var x1 = 10;
}
{ 
    x = 20;
    x1 = 20;
}
console.log("x1 :", x1);
console.log("x :", x);