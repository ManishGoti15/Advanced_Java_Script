let data = {
    name : "Manish",
    surname : "Goti",
    age : 20,
    vehical : ["Unicorn","Activa"],
    fun1: function(){
        console.log("Manish")
    },
    printage: function(newage){
        console.log(newage)
    }
}


// 1. print all value of your details object

// console.log(data.name);
// console.log(data.surname);
// console.log(data.age);
// console.log(data.vehical);
// console.log(data.fun1());



// 2. . add a function name printAge inside object who print age (from outside)

// console.log(data.printage(21));



// 3. get all key

// for(key in data){
// console.log(key)
// }



// 4. get all value

// let values = Object.values(data)
// console.log(values);



// 5. add one key for city name and store your city name on it  (from outside)

// data.city = "Surat"
// console.log(data);



// 6. delete age key from object

// delete data.age
// console.log(data);



// . make one function name addAge who print age with add some year which one pass by user

// data.addAge = function(addyears) {
//     console.log("age :", this.age + addyears);
// }
// data.addAge(19)
// console.log(data);
