let person= [
    { name: "kush", age: 9 },
    { name: "tej", age: 10 },
    { name: "smit", age: 5 },
    { name: "ram", age: 20 },
  ];


  let obj = { name: "ram", age: 20 };
console.log("name --->", obj.name);
let count = 0;

console.log("count :", count);
let totalAge = person.reduce((lastEle, e) => {
  console.log("lastEle :", lastEle);
  console.log("--->", e);
  console.log("--->");
  return (lastEle.age || lastEle) + e.age;
});

console.log("totalAge :", totalAge);