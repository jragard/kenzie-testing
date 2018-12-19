function add(x, y) {
    return x + y
}

function multiply(x, y) {
    let multiplier = x
    for(let counter = 1; counter < y; counter = add(counter, 1)) {
        x = add(x, multiplier)
    }
    return x;
}

function power(x, n) {
    let total = x;
    for(let counter = 1; counter < n; counter = add(counter, 1)) {
        total = multiply(total, x)
    }
    return total;
}

function factorial(x) {
    let total = x;
    let inc = total;

    while(inc > 1) {
        total = multiply(total, (inc - 1))
        inc = inc - 1
    }
    return total;
}

function fibonacci(n) {

    let a = 0
    let b = 1
    let next;

    if(n == 1) {
        return a;
    }
    else if(n == 2) {
        return b;
    }
    else {
        while(n >= 3) {
            next = add(a,b);
            a = b;
            b = next;
            n--;
        }
    }
    return next;
}

module.exports = { add, multiply, power, factorial, fibonacci }