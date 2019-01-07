"use strict";

function alphabetize(a) {
  return a
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
}

function getSetsOfFiveAnagrams() {
  const dictionary = {};
  for (let word of words) {
    const key = alphabetize(word);
    dictionary[key] ? dictionary[key].push(word) : (dictionary[key] = [word]);
  }
  const results = [];
  for (let list of Object.values(dictionary)) {
    if (list.length === 5) {
      results.push(list);
    }
  }
  return results;
}
