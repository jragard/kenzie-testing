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
        "expected": "wrongAnswer",
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
        "function": "distinctCount('1 3 5 3 7 3 1 1 5')",
        "expected": "1(3) 3(3) 5(2) 7(1)",
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

module.exports = { reverseString, testReverseString1, reverseSentence, testReverseSentence1, minimumValue, testMinimumValue1, maximumValue, testMaximumValue1, calculateRemainder, testCalculateRemainder1, distinctValues, testDistinctValues1, countValues, testCountValues1, evaluateExpression, testEvaluateExpression1 }
