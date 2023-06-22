function sum(m, n, ...o) {
    console.log("o :", o); // give array of rest pera
    return m + n;   
}

console.log(sum(1, 3, 2, 4, 3, 1));