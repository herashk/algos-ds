// write a recursive fn called isPalindrome which returns true 
// if the string passed to it is a palindrome
// otherwise return false

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

// i need to compare the input with the reversed input 
// and check if they are the same
// i can use the previously written reverse function as a helper

function isPalindrome(str) {
    let result = '';

    function helper(input) {
        if (input.length === 0) {
            return;
        }
        // don't forget to always reassign the result!!!
        result = result.concat(input[input.length - 1]);
        console.log('result', result);
        helper(input.slice(0, input.length - 1));
    }
    helper(str);
    return result === str;
}
isPalindrome('tacocat')