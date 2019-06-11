class HashTable {
    constructor(size = 100) {
        this.keyMap = new Array(100);
    }
    // example hash function
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

    set(key, value) {
        let hashIndex = this._hash(key);
        if (!this.keyMap[hashIndex]) {
            this.keyMap[hashIndex] = [];
        }
        // pushing in a key value pair
        this.keyMap[hashIndex].push([key, value]);
    }

    get(key) {
        let hashIndex = this._hash(key);
        if (this.keyMap[hashIndex]) {
            // this.keyMap[hashIndex] is going to be an array of key value pairs
            let length = this.keyMap[hashIndex].length;
            for (let i = 0; i < length; i++)  {
                // 0 is the key and 1 is the value!
                if (this.keyMap[hashIndex][i][0] === key) {
                    return this.keyMap[hashIndex][i][1];
                }
            }
        }
        return undefined;
    }
    // loops through the hash table array and returns an array of keys in the table
    keys() {
        let result = [];
        if (!this.keyMap.length) return undefined;
        for (let i = 0; i < this.keyMap.length; i++) {
            // check if the sub array exists. If so loop through that again
            let keyStorage = this.keyMap[i];
            if (keyStorage) {
                for (let j = 0; j < keyStorage.length; j++) {
                    let eachKey = keyStorage[j][0];
                    if (!result.includes(eachKey)) {
                        result.push(eachKey);
                    }
                }
            }
        }
        return result;
    }

    values() {
        let result = [];
        if (!this.keyMap.length) return undefined;
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i]; j++) {
                    let eachValue = this.keyMap[i][j][1];
                    if (!result.includes(eachValue)) {
                        result.push(eachValue);
                    }
                }
            }
        }
        return result;
    }
}