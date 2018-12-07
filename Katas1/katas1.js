function oneThroughTwenty() {
    // Return an array with the numbers from 1 to 20
    const numbers = []
    for (let counter = 1; counter < 21; counter++) {
        numbers.push(counter)
    }
    return numbers
}

function evensToTwenty() {
    // Return an array with the even numbers from 1 to 20
    const numbers = []
    for (let counter = 2; counter < 21; counter += 2) {
        numbers.push(counter)
    }
    return numbers
}

function oddsToTwenty() {
    // Return an array with the odd numbers from 1 - 20
    const numbers = []
    for (let counter = 1; counter < 20; counter += 2) {
        numbers.push(counter)
    }

    return numbers;
}

function multiplesOfFive() {
    // Return an array with the multiples of 5 up to 100
    const numbers = []
    for (let counter = 5; counter < 101; counter += 5) {
        numbers.push(counter)
    }

    return numbers;
}

function squareNumbers() {
    // Return an array with square numbers up to 100
    const numbers = []
    for (let counter = 1; counter < 11; counter += 1) {
        numbers.push(counter ** 2)
    }

    return numbers;
}

function countingBackwards() {
    // Return an array with the numbers counting backwards from 20 to 1
    const numbers = []
    for (let counter = 20; counter > 0; counter -= 1) {
        numbers.push(counter)
    }

    return numbers;
}

function evenNumbersBackwards() {
    // Return an array with the even numbers counting backwards from 20
    const numbers = []
    for (let counter = 20; counter > 1; counter -= 2) {
        numbers.push(counter)
    }

    return numbers;
}

function oddNumbersBackwards() {
    // Return an array with the odd numbers counting backwards from 20 to 1
    const numbers = []
    for (let counter = 19; counter > 0; counter -= 2) {
        numbers.push(counter)
    }

    return numbers;
}

function multiplesOfFiveBackwards() {
    // Return an array with the multiples of five, counting backwards from 100
    const numbers = []
    for (let counter = 100; counter > 1; counter -= 5) {
        numbers.push(counter)
    }

    return numbers;
}

function squareNumbersBackwards() {
    // Return an array with square numbers, counting backwards from 100
    const numbers = []
    for (let counter = 10; counter > 0; counter -= 1) {
        numbers.push(counter ** 2)
    }

    return numbers;
}