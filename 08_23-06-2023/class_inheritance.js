// let prDetails = {
//   name: "sinu",
//   surname: "patel",
//   age: 10,
//   add: {
//     city: "surat",
//   },
//   vehical: ["passion", "unicon", { a: 10 }],
//   fun1: (x) => {
//     console.log("x", x);
//     return x;
//   },
// };

// console.log(prDetails.fun1());

class User {
    constructor(){
        this.name="My Name"
    }
    login() {
        super.login()
        console.log("login", this.name);
    }
    attendance() {
        console.log("attendance",);
    }
}

class Student extends User{
    constructor() {
        super();
        this.name = "Meet"
    }
    student() {
        console.log("Please enter name student", this.name);
    }
}

class Teacher extends User{
    teacher() {
        console.log("teacher");
    }
}

const s = new Student();
console.log('s :', s);
s.student();
s.login();

const t = new Teacher();
// t.teacher();
// t.login();



// var a = 10;

// var a = 20;
// console.log("------>", a)