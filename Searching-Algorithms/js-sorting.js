// build in sort methods accepts an optional comparator fn
// you can use this comparator function to tell JS how you want to sort
// the comparator looks at pairs of elements (a and b)
// and determins their sort order based on the return value
// if it returns a negative number, a should come before b
// if it returns a positive number, a should come after b

function numberCompare(num1, num2) {
    // if you change to num2 - num1, you can descending order
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15];


function compareByLength(str1, str2) {
    return str1.length - str2.length;
}



