// let faculty = {
//   name,
//   add,
//   empId,
//   std,
// };

// class person {
//   student(args) {
//     console.log(args);
//   }
//   login(args2) {
//     console.log(args2);
//   }
// }

// let m = new person();

// m.student("m====>");

// let n = new person();

// n.login("======>n");

class person {
    constructor(a, b) {
      this.x = a || 12;
      this.y = b || 16;
    }
    sum(z) {
      console.log("----->", this.x + this.y + z || 0);
    }
    sub() {
      console.log(this.y - this.x);
    }
  }
  
  // let x = new person(22, 18);
  // let y = new person(61, 29);
  
  // x.sum(2);
  // y.sum(5);

  let m = new person (70, 50);
  
