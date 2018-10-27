module.exports = {
    oneThroughTwenty: function() {
        const numbers = []
        for (let counter = 1; counter < 21; counter++) {
            numbers.push(counter)
        }
        return numbers
    },
    evensToTwenty: function() {
        const numbers = []
        for (let counter = 2; counter < 21; counter += 2) {
            numbers.push(counter)
        }
        return numbers
    }
 }

//  module.exports = {
//      oneThroughTwenty: function() {
//          // Your code goes here
//      }
//  }