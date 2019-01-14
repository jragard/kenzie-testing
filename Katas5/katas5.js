function reverseString(str) {
    let arr = str.split('')
    let rev = arr.reverse()
    let result = rev.join('')
    return result
}

function testReverseString1() {
    let result = reverseString('happyPath');
    console.assert(result === 'htaPyppah', {
        "function": "reverseString('happyPath')",
        "expected": "htaPyppah",
        "result": result
    })
}

function testReverseString2() {
    let result = reverseString('strings');
    console.assert(result === 'sgnirts', {
        "function": "reverseString('strings')",
        "expected": "sgnirts",
        "result": result
    })
}

function reverseSentence(sentence) {
    let arr = sentence.split(' ');
    let rev = arr.reverse();
    let result = rev.join(' ');
    return result
}

function testReverseSentence1() {
    let result = reverseSentence('This is a happy path');
    console.assert(result === 'path happy a is This', {
        "function": "reverseSentence('This is a happy path')",
        "expected": "path happy a is This",
        "result": result
    })
}

function testReverseSentence2() {
    let result = reverseSentence('Another sentence to test');
    console.assert(result === 'test to sentence Another', {
        "function": "reverseSentence('Another sentence to test')",
        "expected": "test to sentence Another",
        "result": result
    })
}

function minimumValue(arr) {
    let minimum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i]
        }
     }
     return minimum
}

function testMinimumValue1() {
    let result = minimumValue([8, 14, 7, 23, 9, 2, 7, 3]);
    console.assert(result === 2, {
        "function": "minimumValue([8, 14, 7, 23, 9, 2, 7, 3])",
        "expected": 2,
        "result": result
    })
}

function testMinimumValue2() {
    let result = minimumValue([45, 38, 9, 65, 23, 72]);
    console.assert(result === 9, {
        "function": "minimumValue([45, 38, 9, 65, 23, 72])",
        "expected": 9,
        "result": result
    })
}

function maximumValue(arr) {
    let maximum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
}

function testMaximumValue1() {
    let result = maximumValue([8, 14, 7, 23, 9, 2, 7, 3]);
    console.assert(result === 23, {
        "function": "maximumValue([8, 14, 7, 23, 9, 2, 7, 3])",
        "expected": 23,
        "result": result
    })
}

function testMaximumValue2() {
    let result = maximumValue([45, 38, 9, 65, 23, 72]);
    console.assert(result === 72, {
        "function": "maximumValue([45, 38, 9, 65, 23, 72])",
        "expected": 72,
        "result": result
    })
}

function calculateRemainder(numerator, denominator) {
    return numerator % denominator;
}

function testCalculateRemainder1() {
    let result = calculateRemainder(7, 4);
    console.assert(result === 3, {
        "function": "calculateRemainder(7, 4)",
        "expected": 3,
        "result": result
    })
}

function testCalculateRemainder2() {
    let result = calculateRemainder(9, 7);
    console.assert(result === 2, {
        "function": "calculateRemainder(9, 7)",
        "expected": 2,
        "result": result
    })
}

function distinctValues(list) {
    arr = list.split(' ');
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result.join(' ')
}

function testDistinctValues1() {
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    console.assert(result === "1 3 5 7", {
        "function": "distinctValues('1 3 5 3 7 3 1 1 5)",
        "expected": "1 3 5 7",
        "result": result
    })
}

function testDistinctValues2() {
    let result = distinctValues("7 10 5 10 3 5 7")
    console.assert(result === "7 10 5 3", {
        "function": "distinctValues('7 10 5 10 3 5 7')",
        "expected": "7 10 5 3",
        "result": result
    })
}

function countValues(list) {
    arr = list.split(' ');

    let counts = {};
    let values = [];
    let result = '';

    for (i = 0; i < arr.length; i++) {
        if (!values.includes(arr[i])) {
            values.push(arr[i]);
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]] =  counts[arr[i]] + 1;
        }
    }

    for(let i = 0; i < values.length; i++){
        result = result + values[i] + '(' + counts[values[i]] + ') '
    }
    
    return result.trim();
}

function testCountValues1() {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    console.assert(result === "1(3) 3(3) 5(2) 7(1)", {
        "function": "countValues('1 3 5 3 7 3 1 1 5')",
        "expected": "1(3) 3(3) 5(2) 7(1)",
        "result": result
    })
}

function testCountValues2() {
    let result = countValues("7 10 5 10 3 5 7");
    console.assert(result === "7(2) 10(2) 5(2) 3(1)", {
        "function": "countValues('7 10 5 10 3 5 7')",
        "expected": "7(2) 10(2) 5(2) 3(1)",
        "result": result
    })
}

function evaluateExpression(expression, values){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(i = 0; i < alphabet.length; i++){
        expression = expression.replace(alphabet[i],values[alphabet[i]])
    }
    return eval(expression);
}

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3, {
        "function": "evaluateExpression('a + b + c - d')",
        "expected": -3,
        "result": result
    })
}

function testEvaluateExpression2() {
    let result = evaluateExpression("a - b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -17, {
        "function": "evaluateExpression('a - b + c - d')",
        "expected": -17,
        "result": result
    })
}


