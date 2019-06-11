// explain what a hash table is and define what a hashing algorithm is
// discuss what makes a good hasing algorithm
// understand howh collisions occur in a hash table
// handle collisions using separate chaining or lineaer probing??

// hash tables in the wild (key value pairs)
// python has Dictionaries, JS has OBjects and Maps, Java/Go/Scala have Maps, Ruby has Hashes. JS Objects have some restrictions like the keys having to be strings but they are basically has tables

// use an array to implement a hash table
// in order to look up values by key, we need a way to convert keys into valid array indices - function that performs this task is called a hash function
// hash function will take in a data of arbitrary data and spit out data with fixed size
// majority of hash functions can't go backwards. You can't take a hash and figure out what data was passed in

// What makes a good hash? 1) Fast (ex - constant time) 2) doesn't clutter outputs at specific indices, but distributes uniformly to make sure every space is evenly filled out 3) deterministic (same input yields same output)!!!

// insertion, deletion, access are all O(1) on average. And this depends on how good your hash function is

// charCodeAt() - 96 = position in the alphabet
// how do we make sure we are in bound with the length parameter? use %

// what's the problem with below hash func?
// only hashes strings (we won't worry about this), not constant time (linear to key length)!!, could be a little more random (our data can be clustered relatively easily)
// how can we improve this?
function hash(key, length) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) = 96;
        total = (total + value) % length;
    }
    return total;
}

// using of prime numbers!
// prime numbers is helpful in spreading out the keys more uniformly
// it's also helpful if the array that you are putting values in has a prime length
// https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why
function improvedHash() {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// Dealing with Collisions - they are inevitable
// 1) separate chaining => using a nested data structure, at each index, we store values using a more sophisticated data structure (array or linked list). This allows us to store multiple key values pairs at a given position. To find it, loop through the nested structure and find it
// 2) linear probing => we store a single key-value pair at each index. When there is a collision, we search through the list to find the next empty slot.

class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    // hash the key(figure out where to store it), store the key value pair 
    set(key, value) {
        let hashIndex = this._hash(key);
        // check if that hashIndex is inside the keyMap
        if (!this.keyMap[hashIndex]) {
            this.keyMap[hashIndex] = []; // making a nested array structure
        }
        this.keyMap[hashIndex].push([key, value]);
    }

    get(key) {
        let hashIndex = this._hash(key);
        if (this.keyMap[hashIndex]) {
            for (let i = 0; i < this._keyMap[hashIndex].length; i++) {
                if (this.keyMap[hashIndex][i][0] === key) {
                    return this.keyMap[hashIndex][i][1];
                }
            }
        }
        return undefined;
    }

    // loops through the hash table array and returns an array of keys in the table
    keys() {
        let keysResult = [];
        if (this.keyMap.length === 0) return undefined;
        for (let i = 0; i < this.keyMap.length; i++) {
            // don't forget to check if this.keyMap[i] exists
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let eachKey = this.keyMap[i][j][0]
                    if (!keysResult.includes(eachKey)) {
                        keysResult.push(eachKey);
                    }
                }
            }
        }
        return keysResult;
    }

    // loops through the hash table array and returns an array of values in the table
    values() {
        let valuesResult = [];
        if (this.keyMap.length === 0) return undefined;
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let eachValue = this.keyMap[i][j][1];
                    if (!valuesResult.includes(eachValue)) {
                        valuesResult.push(eachValue);
                    }
                }
            }
        }
        return valuesResult;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

ht.keys().forEach((key) => {
    console.log(ht.get(key));
})