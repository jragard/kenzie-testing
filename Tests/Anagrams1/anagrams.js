'use strict';

function getAnagramsOf(input) {
    const result = [];
    const key = alphabetize(input);
    for (let word of words) {
        if (alphabetize(word) === key) {
            result.push(word);
        } 
    }
    return result;
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
