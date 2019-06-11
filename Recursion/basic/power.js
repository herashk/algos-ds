// write a fn called power which accepts a base
// and an exponent. fn should return the power of 
// the base to the exponent. fn should mimic the
// functionality of Math.pow() 
// do not worry about negative bases & exponents


power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16

// base case?
// we know that the second arg is the exponent
// so if power(2, 4) this is the same as
// 2 x 2 x 2 x 2
// the base case will be where the exponent is 0
// different input each time will be the 
// decreased exponent so (2, 4), (2, 3), (2, 2)...

function power(num, exp) {
    if (exp === 0) {
        return 1;
    }
    return num * power(num, exp - 1)
}