function newForEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        callback(array[index])
    }
}

function newMap(array, callback) {
    let result = []
    for(let index = 0; index < array.length; index++) {
        result.push(callback(array[index]))
    }
    return result;
}

function newSome(array, callback) {
    let result = false;
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true) {
            return true
        } 
    }
    return result;
}

function newFind(array, callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true) {
            return array[index]
        }
    }
}

function newFindIndex(array, callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true) {
            return index;
        }
    }
    return -1;
}

function newEvery(array, callback) {
    let result = true;
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index]) === false) {
            result = false;
        }
    }
    return result;
}

function newFilter(array, callback) {
    let result = []
    for(let index = 0; index < array.length; index++) {
        if (callback(array[index]) === true) {
            result.push(array[index])
        }
    }
    return result;
}
