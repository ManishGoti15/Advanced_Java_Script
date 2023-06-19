function fun1(a, b, callback) {
    // a=5 b = 10 callback= fun2
    let c = a + b;
    // c = a+b  : 5+10 = 15
    setTimeout(function () {
        return callback(c); // fun2(c)
    }, 1000);
}   

    function fun2(value) {
    // value = c : 15
    document.getElementById("demo").innerHTML = value;
}

    fun1(12, 6, fun2);