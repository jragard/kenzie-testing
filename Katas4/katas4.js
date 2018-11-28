const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


function kata1() {

    return gotCitiesCSV.split(',');
}

function kata2() {

    return bestThing.split(' ');
}

function kata3() {

    return gotCitiesCSV.split(',').join(';');
}

function kata4() {

    return lotrCitiesArray.join(',');
}

function kata5() {

    return lotrCitiesArray.slice(0, 5);
}

function kata6() {

    return lotrCitiesArray.slice(lotrCitiesArray.length - 5);
}

function kata7() {

    return lotrCitiesArray.slice(2, 5);
}

function kata8() {
    lotrCitiesArray.splice(2, 1);
    return lotrCitiesArray
}

function kata9() {
    lotrCitiesArray.splice(5);
    return lotrCitiesArray;
}

function kata10() {
    lotrCitiesArray.splice(2, 0, 'Rohan');
    return lotrCitiesArray
}

function kata11() {
    lotrCitiesArray.splice(5, 1, 'Deadest Marshes');
    return lotrCitiesArray
}

function kata12() {
    return bestThing.slice(0, 14);
}

function kata13() {

    return bestThing.slice(bestThing.length - 12);
}

function kata14() {

    return bestThing.slice(23, 38);
}

function kata15() {

    return bestThing.substr(bestThing.length - 12);
}

function kata16() {

    return bestThing.substr(23, 15);
}

function kata17() {

    return bestThing.indexOf('only');
}

function kata18() {

    return bestThing.indexOf('bit');
}

function kata19() {
    const spl = gotCitiesCSV.split(',')
    const cities = []

    for(let index = 0; index < spl.length; index++) {
        if(spl[index].includes('aa') || spl[index].includes('ee') || spl[index].includes('ii') || spl[index].includes('oo') || spl[index].includes('uu')) {
            cities.push(spl[index])
        }
    }
    return cities;
}

function kata20() {
    const cities = [];

        for (let index = 0; index < lotrCitiesArray.length; index++) {
            if (lotrCitiesArray[index].slice(lotrCitiesArray[index].length - 2) === 'or') {
              cities.push(lotrCitiesArray[index])
            }
          }
        return cities;
}

function kata21() {
    const spl = bestThing.split(' ')
    const words = []

    for (let index = 0; index < spl.length; index++) {
        if (spl[index].slice(0,1) === 'b') {
            words.push(spl[index])
        }
    }
    return words;
}

function kata22() {
    if (lotrCitiesArray.includes('Mirkwood')) {
        return 'Yes'
      } else {
        return 'No'
      }
}

function kata23() {
    if (lotrCitiesArray.includes('Hollywood')) {
        return 'Yes'
      } else {
        return 'No'
      }
}

function kata24() {
    return lotrCitiesArray.indexOf('Mirkwood');
}

function kata25() {
    for (let index = 0; index < lotrCitiesArray.length; index++) {
        if (lotrCitiesArray[index].includes(' ')) {
          return lotrCitiesArray[index]
        }
      }
}

function kata26() {

    return lotrCitiesArray.reverse();
}

function kata27() {

    return lotrCitiesArray.sort();;
}

function kata28() {

    return lotrCitiesArray.sort(function(a, b) {
        return a.length - b.length;
    });
}

function kata29() {
    lotrCitiesArray.pop();
    return lotrCitiesArray;
}

function kata30() {
    lotrCitiesArray.push('Deadest Marshes')
    return lotrCitiesArray;
}

function kata31() {
    lotrCitiesArray.shift();
    return lotrCitiesArray;
}

function kata32() {
    lotrCitiesArray.unshift('Rohan')
    return lotrCitiesArray;
}

module.exports = { kata1, kata2, kata3, kata4, kata5, kata6, kata7, kata8, kata9, kata10, kata11, kata12, kata13, kata14, kata15, kata16, kata17, kata18, kata19, kata20, kata21, kata22, kata23, kata24, kata25, kata26, kata27, kata28, kata29, kata30, kata31, kata32}

