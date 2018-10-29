const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

module.exports = {
    kata1: function() {
        // Return an array from the cities in 'gotCitiesCSV'
        return gotCitiesCSV.split(',');
    },
    kata2: function() {
        // Return an array of words from the sentence in string 'bestThing'
        return bestThing.split(' ') 
    },
    kata3: function() {
        // Return string separated by semi-colons instead of commas from gotCitiesCSV
        return gotCitiesCSV.split(',').join(';')
    },
    kata4: function() {
        // Return a CSV (comma-separated) string from the lotrCitiesArray
        return lotrCitiesArray.join(',')
    },
    kata5: function() {
        // Return the first 5 cities in lotrCitiesArray
        return lotrCitiesArray.slice(0, 5)
    },
    kata6: function() {
        // Return the last 5 cities in lotrCitiesArray
        return lotrCitiesArray.slice(lotrCitiesArray.length - 5)
    },
    kata7: function() {
        // Return the 3rd to 5th city in lotrCitiesArray
        return lotrCitiesArray.slice(2, 5)
    },
    kata8: function() {
        // Using splice, remove "Rohan" from lotrCitiesArray.  (Splice will mutate the original 
        // array, where slice will not)  Return the new lotrCitiesArray
        return lotrCitiesArray.splice(2, 1)
    },
    kata9: function() {
        // Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
        // Return the new array
        return lotrCitiesArray.splice(5)
    },
    kata10: function() {
        // Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
        // Return the new array
        return lotrCitiesArray.splice(2, 0, 'Rohan')
    },
    kata11: function() {
        // Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
        // Return the new array
        return lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
    },
    kata12: function() {
        // Using slice, return the first 14 characters from bestThing
        return bestThing.slice(0, 14)
    },
    kata13: function() {
        // Using slice, return the last 12 characters from bestThing
        return bestThing.slice(bestThing.length - 12)
    },
    kata14: function() {
        // Using slice, return characters between the 23rd and 38th position of bestThing (i.e., "boolean is even")
        return bestThing.slice(23, 38)
    },
    kata15: function() {
        // Repeat #13 using substring instead of slice.
        return bestThing.substr(bestThing.length - 12)
    },
    kata16: function() {
        // Repeat #14 using substr instead of slice.
        return bestThing.substr(23, 15)
    },
    kata17: function() {
        // Find and return the index of "only" in bestThing
        return bestThing.indexOf('only')
    },
    kata18: function() {
        // Find and return the index of the last word in bestThing
        return bestThing.indexOf('bit')
    },
    kata19: function() {
        // Find and return all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
        const spl = gotCitiesCSV.split(',')
        const cities = []

        for(let index = 0; index < spl.length; index++) {
            if(spl[index].includes('aa') || spl[index].includes('ee') || spl[index].includes('ii') || spl[index].includes('oo') || spl[index].includes('uu')) {
                cities.push(spl[index])
            }
        }
        return cities;
    },
    kata20: function() {
        // Find and return all cities from lotrCitiesArray that end with "or"
        const cities = [];

        for (let index = 0; index < lotrCitiesArray.length; index++) {
            if (lotrCitiesArray[index].slice(lotrCitiesArray[index].length - 2) === 'or') {
              cities.push(lotrCitiesArray[index])
            }
          }
        return cities;
    },
    kata21: function() {
        // Find and return all the words in bestThing that start with a "b"
        const spl = bestThing.split(' ')
        const words = []

        for (let index = 0; index < spl.length; index++) {
            if (spl[index].slice(0,1) === 'b') {
              words.push(spl[index])
            }
          }
        return words;
    },
    kata22: function() {
        // Return "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
        if (lotrCitiesArray.includes('Mirkwood')) {
            return 'Yes'
          } else {
            return 'No'
          }
    },
    kata23: function() {
        // Return "Yes" or "No" if lotrCitiesArray includes "Hollywood"
        if (lotrCitiesArray.includes('Hollywood')) {
            return 'Yes'
          } else {
            return 'No'
          }
    },
    kata24: function() {
        // Return the index of "Mirkwood" in lotrCitiesArray
        return lotrCitiesArray.indexOf('Mirkwood')
    },
    kata25: function() {
        // Find and return the first city in lotrCitiesArray that has more than one word
        for (let index = 0; index < lotrCitiesArray.length; index++) {
            if (lotrCitiesArray[index].includes(' ')) {
              return lotrCitiesArray[index]
            }
          }
    },
    kata26: function() {
        // Reverse the order in lotrCitiesArray.  Return the new array
        return lotrCitiesArray.reverse();
    },
    kata27: function() {
        // Sort lotrCitiesArray alphabetically.  Return the new array
        return lotrCitiesArray.sort();
    },
    kata28: function() {
        // Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
        // Return the new array
        return lotrCitiesArray.sort(function(a, b) {
            return a.length - b.length;
        })
    },
    kata29: function() {
        // Using pop, remove the last city from lotrCitiesArray.  Return the new array
        lotrCitiesArray.pop();
        return lotrCitiesArray;
    },
    kata30: function() {
        // Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
        // Return the new array
        lotrCitiesArray.push('Deadest Marshes')
        return lotrCitiesArray;
    },
    kata31: function() {
        // Using shift, remove the first city from lotrCitiesArray.  Return the new array
        lotrCitiesArray.shift();
        return lotrCitiesArray;
    },
    kata32: function() {
        // Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
        // Return the new array
        lotrCitiesArray.unshift('Rohan')
        return lotrCitiesArray;
    },
}