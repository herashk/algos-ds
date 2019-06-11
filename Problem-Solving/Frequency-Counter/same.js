// write a function called same, which accets two arrays
// The function should return true if every value in the array has its corresponding value squared in the second array
// the frequency of values must be the same
// same([1, 2, 3], [1, 4, 9]) true
// same([1, 2, 1], [4, 4, 1]) false
// same([1, 2, 3], [1, 9]) false


// Restating the problem
// fn that compares 2 arrays to see if one has squared values of the other
// need to be same length 

// Explore examples - see above

// Break it down
// first compare the length of the two arrays. If not same, return false
// loop through the first array
// if array[i]'s squared (value) is inside the second array (using indexOf(value))
// mark that value in the second array as a negative value so that we know we've been there
// when checking if the value in the second array, check if that value is not negative
// if indexOf(value) is negative before the loop is over return false
// if all is successful, return true

function same(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        let array2Index = array2.indexOf(array1[i] * array1[i]);
        if (array2Index < 0) {
            return false;
        } else {
            array2[array2Index] = -Math.abs(array2[array2Index]);
        }
    }
    return true;
}

// Refactored - frequency countering
// instead of nested loops, you can loop over each array individually
function sameRefactored(array1, array2) {
    if (array1.length !== array2.length) return false;
    // [1, 2, 3], [1, 4, 9]
    // use objects to destructure arrays to see what it's made out of
    let frequency1 = {};
    let frequency2 = {};

    for (let i = 0; i < array1.length; i++) {
        frequency1[array1[i]] = (frequency1[array1[i]] || 0) + 1;
    }
    console.log('freq1', frequency1);
    // { 1: 1, 2: 1, 3: 1}
    for (let i = 0; i < array2.length; i++) {
        frequency2[array2[i]] = (frequency2[array2[i]] || 0) + 1;
    }
    console.log('freq2', frequency2);
    // { 1: 1, 4: 1, 9: 1}
    for (key in frequency1) {
        if (!frequency2[key * key]) {
            return false;
        }
        if (frequency2[key*key] !== frequency1[key]) {
            return false;
        }
    }
    return true;
}

// Difference between for in and for of
// for of is for array 
let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

let str = 'abcde';

for (let char of str) {
  console.log(char.toUpperCase().repeat(3));
}

// for in is to iterate over an object, keys of the object
let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
  };
  
  for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
  }