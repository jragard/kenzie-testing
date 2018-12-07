function numbersToWords() {

    const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['one-hundred', 'two-hundred', 'three-hundred', 'four-hundred', 'five-hundred', 'six-hundred', 'seven-hundred', 'eight-hundred', 'nine-hundred', 'one-thousand'];

    const results = [];
    // let resultString = ""
    const oneThroughHundred = [];

    for(let i = 0; i < 9; i++) {
        oneThroughHundred.push(ones[i])
    }

    for(let i = 0; i < 10; i++) {
        oneThroughHundred.push(teens[i])
    }

    for(let i = 0; i < 9; i++) {
        oneThroughHundred.push(tens[i])
        for(let j = 0; j < 9; j++) {
          oneThroughHundred.push(tens[i] + "-" + ones[j])
        }
    }

    for(let i = 0; i < 99; i++) {
        results.push(oneThroughHundred[i])
    }

    for(let i = 0; i < 9; i++) {
        results.push(hundreds[i])
        for(let j = 0; j < 99; j++) {
          results.push(hundreds[i] + '-' + oneThroughHundred[j])
        }
    }

    results.push("one-thousand")

    // for(let i = 0; i < results.length; i++) {
    //     resultString += results[i] + " - "
    // }

    return results;
}

console.log(numbersToWords())

module.exports = { numbersToWords }