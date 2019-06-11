// write a fn called collectStrings which accepts an obj
// and returns an array of all value in the obj
// that have a typeof string

const obj2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj2) // ["foo", "bar", "baz"])

// use a for in loop to traverse through the hash
// make an empty arry to hold the string values

function collectStrings(obj) {
    let collection = [];
    for (let key in obj) {
        if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
            // each call stack will return either
            // array with the string inside ex - ['foo']
            // or another function call which equates to
            // [] = [] + collectString[anotherObj]
            // the very top fn on the callstack will evaluate to
            // either [] or example ['baz']
            // so essentially you are doing calculation like
            // [] + ['foo'] + [] + [] + ....
            collection = collection.concat(collectStrings(obj[key]));
        } else if (typeof obj[key] === 'string') {
            collection.push(obj[key]);
        }
    }
    return collection;
}