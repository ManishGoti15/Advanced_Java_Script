// let y = null;
// let y1 = 16;
// let m = y || y1;
// let m2 = y && y1;
// console.log("m2 :", m2)
// console.log("====>", m);

let a = {
    x : 18,
    y : {
        m : 0,
    }
    // sum : function name() {
    //     console.log(this.x + this.y);
    // },
};
a.x = 45
// console.log("a", a.sum());
console.log("a", a?.y?.m); // a.y ? a.y.m : null