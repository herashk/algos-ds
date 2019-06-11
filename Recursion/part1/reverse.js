// write a recursive function called reverse which accepts
// a string and returns a new string in reverse

reverse('awesome') // emosewa
reverse('rithmschool') // loohcsmhtir

// base case will be when input string's length is 0
// return empty string
// different input will be the decreased string
// since I will be reversing the string, it will be better
// to pop the string and decrease length from back

function reverse(str) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0)  {
            return;
        }
        result.push(helperInput[helperInput.length - 1]);
        helper(helperInput.slice(0, helperInput.length - 1));
    }
    helper(str)
    return result.join('');

}