// write a recursive fn called nestedEvenSum
// return the sum of all even numbers in an object
// which may contain nested objects

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10

  // use a for in loop to loop inside the object
  // for loop will act as the base case
  // make an empty var to hold the sum of all even numbers
  // check each key and if the value is even, add it to that var
  // return that var at the end
  // the different input will be the object inside the objects

  function nestedEvenSum(hash) {
      let sum = 0;
      for (let key in hash) {
          if (typeof hash[key] === 'object') {
            // make sure sum is added because
            // each function callstack initializes a new sum that equals
            // to 0
            sum+=nestedEvenSum(hash[key]);
        } else if (typeof hash[key] === 'number' && hash[key] % 2 === 0) {
            sum+=hash[key];
        }
      }
      return sum;
  }