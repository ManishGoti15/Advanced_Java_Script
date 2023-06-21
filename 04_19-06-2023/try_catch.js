// let pro = new Promise((resolve, reject) => {
//     let arr = [1];
//     let isExist = arr.includes(1);
//     console.log("isExist :", isExist);
//     if (isExist) resolve(arr);
//     else reject("nathi malyu...!");
// });

let fun1 = () => {
    return [1];
};

// let fun2 = (val) => {
//   setTimeout(() => {
//     throw new Error("throw new err");
//   }, 1000);
// };

let fun2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("throw new err");
    }, 1000);
});
let fun3 = (val) => {
    let newArr = [...val, 2];
    return newArr;
};

let fun4 = (val) => {
    // console.log("val :", val);
    val.unshift(0);
    // console.log("val :", val);
    return val;
};
  
async function tryCatch() {
    // let tryCatch=async()=> {
    try {
        let x = fun1();
        console.log("x :", x);
      // x=[1]
    await fun2; //-->stop execution -> move to catch
        let x2 = fun3(x);
        console.log(" x2 :", x2);
      //x2=[1,2]
        let x3 = fun4(x2);
        console.log("x3 :", x3);
    } catch (err) {
        console.log("err :", err);
    }
}
  
tryCatch();
//   ASYNC - WAIT
//     function print(p) {
//         console.log(p);
//     }
  
//     let a = "abc";
//     print(a);
  
/*
   *find(filter,(err,res)=>{
      
   })
   *find(filter).then().catch()
*/