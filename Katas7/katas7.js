function forEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        callback(array[index])
    }
}

function map(array, callback) {
    let result = []
    for(let index = 0; index < array.length; index++) {
        result.push(callback(array[index]))
    }
    return result;
}

function some(array, callback) {
    let result = false;
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true) {
            return true
        } 
    }
    return result;
}

function find(array, callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true) {
            return array[index]
        }
    }
}

function findIndex(array, callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true) {
            return index;
        }
    }
    return -1;
}

function every(array, callback) {
    let result = true;
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === false) {
            result = false;
        }
    }
    return result;
}

function filter(array, callback) {
    let result = []
    for(let index = 0; index < array.length; index++) {
        if (callback(array[index]) === true) {
            result.push(array[index])
        }
    }
    return result;
}

module.exports = { forEach, map, some, find, findIndex, every, filter } 