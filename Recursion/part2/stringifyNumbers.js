// write a fn called stringifyNumbers which takes in an
// object and finds all of othe values which are numbers
// and converts them to strings

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)
// output
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

// use a for in loop
// check if the hash[key]'s type is number
// if so call toString() on it
// return the modified obj;

function stringifyNumbers(obj) {
    let hash = Object.assign({}, obj);
    for (let key in hash) {
        if (typeof hash[key] === 'object') {
            // the recursive function is basically just
            // the value of hash[key]!!!! remember this!!
            hash[key] = stringifyNumbers(hash[key]);
        } else if (typeof hash[key] === 'number') {
            hash[key] = hash[key].toString();
        }
    }
    return hash;
}

// below solution checks for arrays because
// arrays are technically objects
function stringifyNumbers(obj) {
    let hash = Object.assign({}, obj);
    for (let key in hash) {
        if (!Array.isArray(hash[key]) && typeof hash[key] === 'object') {
            // the recursive function is basically just
            // the value of hash[key]!!!! remember this!!
            hash[key] = stringifyNumbers(hash[key]);
        } else if (typeof hash[key] === 'number') {
            hash[key] = hash[key].toString();
        }
    }
    return hash;
}

// class solution
function stringifyNumbers(obj) {
    if (!Object.keys(obj).length) return {};

    const key = Object.keys(obj)[0];
    const { [key]: val, ...left } = obj;

    if (Number.isInteger(val)) {
        obj[key] = String(val);
    } else if (typeof val === 'object') {
        obj[key] = stringifyNumbers(val);
    }

    return {
        ...obj,
        ...stringifyNumbers(left),
    };
}