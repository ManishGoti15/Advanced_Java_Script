// (1) make array of object 
//  let person= [
//         { name: "Kush", age: 12 },
//         { name: "Tej", age: 10 },
//         { name: "Smit", age: 18 },
//         { name: "Ram", age: 20 },
//       ];

// - print only name of person
//   with use of map
// - total age of all person
// - count how many people in the array (without use of length method)
// - give new array which have only person who have age gretter then 18
  
//   let obj1 = { name: "Kush", age: 12 };
//   console.log("name --->", obj1.name);
//   let obj2 = { name: "Tej", age: 10 };
//   console.log("name --->", obj2.name);
//   let obj3 = { name: "Smit", age: 18 };
//   console.log("name --->", obj3.name);
//   let obj4 = { name: "Ram", age: 20 };
//   console.log("name --->", obj4.name);
  
//   let count = 0;
//   person.map((e) => {
//     return count++;
//   });
  
//   console.log("count :", count);
//   let totalAge = person.reduce((lastEle, e) => {
//     console.log("lastEle :", lastEle);
//     console.log("--->", e);
//     return (lastEle || lastEle.age) + e.age;
//   });
  

// =============================`


// (2) sort array by actual value

// let sortArr = [1, 30, 32, 4, 21, 100000]; 
//  want = 1,4,21,30,32,10000


//  let arr = [1, 30, 32, 4, 21, 100000];
//  let sortArr = arr.sort((a, b) => a - b);
//  console.log(sortArr);


// =============================


// (3) print all value   

// let prDetails = {
//     name: "Meet",
//     surname: "Goti",
//     age: 20,
//     add: {
//             city: "Surat",
//             state: "Gujarat",
//             country: "India",
//     },
//     vehical: ["Unicorn", "Perak",  { Moped : "Activa" }],
//     fun1: (x) => {
//         console.log("x", x);
//         return x;
//     },
// };

// console.log("Personal_Details :", prDetails); 
// console.log("Name :", prDetails.name);
// console.log("Surname :", prDetails.surname);
// console.log("Address :", prDetails.add);
// console.log("City :", prDetails.add.city);
// console.log("State :", prDetails.add.state);
// console.log("Country :", prDetails.add.country);
// console.log("Vehical :", prDetails.vehical);
// console.log("Vehical :", prDetails.vehical[0]);
// console.log("Vehical :", prDetails.vehical[1]);
// console.log("Moped :", prDetails.vehical[2]);
// console.log("Moped :", prDetails.vehical[2].Moped);
// console.log("a :", prDetails.vehical[2].a);
// console.log("fun :", prDetails.fun1(100));
  

// =============================


// (4) 
//     f1() => { name:''}; // = 'Manish'
//     f1() => { name:'', surname:''}; // = 'Manish Goti'
//     f2() => { name :'', surname:'', age:''} // = 'Manish Goti 20'
//     f3() => { name :'', surname:'', age:'',add:''} // = 'Manish Goti 20 Surat'




// let data = {
//     name: "Meet"
// };
// function fun1(data,fun2,fun3,fun4){
//     data.name = 'Manish'
//     console.log(data)
//     fun2();
//     fun3();
//     fun4();
// }
// function fun2() {
//     data.surname = 'Goti'
//     console.log(data)
// }
// function fun3() {
//     data.age = 20
//     console.log(data)
// }
// function fun4(){
//     data.add = 'Surat'
//     console.log(data)
// }

  
// fun1(data,fun2,fun3,fun4);