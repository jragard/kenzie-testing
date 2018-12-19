function reverseString(str) {
    let arr = str.split('')
    let rev = arr.reverse()
    let result = rev.join('')
    return result
}

function testReverseStringHappy() {
    let result = reverseString('happyPath');
    console.assert(result === 'htaPyppah', {
        "function": "reverseString('happyPath')",
        "expected": "htaPyppah",
        "result": result
    })
}

function testReverseStringSad() {
    let result = reverseString('sadPath');
    console.assert(result === 'wrongAnswer', {
        "function": "reverseString('sadPath')",
        "expected": "wrongAnswer",
        "result": result
    })
}

function reverseSentence(sentence) {
    let arr = sentence.split(' ');
    let rev = arr.reverse();
    let result = rev.join(' ');
    return result
}

function testReverseSentenceHappy() {
    let result = reverseSentence('This is a happy path');
    console.assert(result === 'path happy a is This', {
        "function": "reverseSentence('This is a happy path')",
        "expected": "wrongAnswer",
        "result": result
    })
}

function testReverseSentenceSad() {
    let result = reverseSentence('This is a sad path');
    console.assert(result === 'wrong Answer', {
        "function": "reverseSentence('This is a sad path')",
        "expected": "wrong Answer",
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

function testMinimumValueHappy() {
    let result = minimumValue([8, 14, 7, 23, 9, 2, 7, 3]);
    console.assert(result === 2, {
        "function": "minimumValue([8, 14, 7, 23, 9, 2, 7, 3])",
        "expected": 2,
        "result": result
    })
}

function testMinimumValueSad() {
    let result = minimumValue([8, 14, 7, 23, 9, 2, 7, 3]);
    console.assert(result === 14, {
        "function": "minimumValue([8, 14, 7, 23, 9, 2, 7, 3])",
        "expected": 14,
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

function testMaximumValueHappy() {
    let result = maximumValue([8, 14, 7, 23, 9, 2, 7, 3]);
    console.assert(result === 23, {
        "function": "maximumValue([8, 14, 7, 23, 9, 2, 7, 3])",
        "expected": 23,
        "result": result
    })
}

function testMaximumValueSad() {
    let result = maximumValue([8, 14, 7, 23, 9, 2, 7, 3]);
    console.assert(result === 14, {
        "function": "maximumValue([8, 14, 7, 23, 9, 2, 7, 3])",
        "expected": 14,
        "result": result
    })
}


function calculateRemainder(numerator, denominator) {
    return numerator % denominator;
}

function testCalculateRemainderHappy() {
    let result = calculateRemainder(7, 4);
    console.assert(result === 3, {
        "function": "calculateRemainder(7, 4)",
        "expected": 3,
        "result": result
    })
}

function testCalculateRemainderSad() {
    let result = calculateRemainder(7, 4)
    console.assert(result === 4, {
        "function": "calculateRemainder(7, 4)",
        "expected": 4,
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

function testDistinctValuesHappy() {
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    console.assert(result === "1 3 5 7", {
        "function": "distinctValues('1 3 5 3 7 3 1 1 5)",
        "expected": "1 3 5 7",
        "result": result
    })
}

function testDistinctValuesSad() {
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    console.assert(result === "1 3 5 5 3 7", {
        "function": "distinctValues('1 3 5 3 7 3 1 1 5)",
        "expected": "1 3 5 5 3 7",
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

function testCountValuesHappy() {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    console.assert(result === "1(3) 3(3) 5(2) 7(1)", {
        "function": "distinctCount('1 3 5 3 7 3 1 1 5')",
        "expected": "1(3) 3(3) 5(2) 7(1)",
        "result": result
    })
}

function testCountValuesSad() {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    console.assert(result === "3(1) 3(3) 2(5) 1(7)", {
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

function testEvaluateExpressionHappy() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3, {
        "function": "evaluateExpression('a + b + c - d')",
        "expected": -3,
        "result": result
    })
}

function testEvaluateExpressionSad() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === 5, {
        "function": "evaluateExpression('a + b + c - d')",
        "expected": 5,
        "result": result
    })
}

module.exports = { reverseString, testReverseStringHappy, testReverseStringSad, reverseSentence, testReverseSentenceHappy, testReverseSentenceSad, minimumValue, testMinimumValueHappy, testMinimumValueSad, maximumValue, testMaximumValueHappy, testMaximumValueSad, calculateRemainder, testCalculateRemainderHappy, testCalculateRemainderSad, distinctValues, testDistinctValuesHappy, testDistinctValuesSad, countValues, testCountValuesHappy, testCountValuesSad, evaluateExpression, testEvaluateExpressionHappy, testEvaluateExpressionSad }
