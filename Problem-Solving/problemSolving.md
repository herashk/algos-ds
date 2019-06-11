Algorithms and Problem solving patterns

1. Define what an algorithm is
2. Devise a plan to solve it
3. Compare & contrast problem solving patterns including frequency counters,
   two pointer problems and divice and conquer

What is an algorithm?
- process or set of steps to accomplish a certain task

How do you improve?
- devise a plan 
- master common problem solving patterns
(a lot of problems can be broken into different categories. If you can identify them it will help you solve it)

Problem Solving Strageties --------------------------------------------------------------------------------------------------
1. understand the problem
2. explore concrete examples
3. break it down
4. solve/simplify
5. look back and refactor

Understanding the problem!!
1. can you restate the problem in your own words?
2. what are the inputs that go into the problem?
3. what are the outputs that should come from the solution?
4. can outputs be determined from inputs? do you have enough into to solve the problem?
5. how should you lable the important pieces of data that are a part of the problem? what's important in this problem?

Exploring examples!!
- examples also provide sanity checks that your eventual solution works how it should
1. start with simple examples
2. progress to more complex examples
3. explore examples with empty inputs
4. explore examples with invalid inputs

Break it down!!
- take the actual steps of the problem and write them down!
1. explicitly write out the steps you need to take. This forces you to think about the code before you write it and 
   helps you catch any lingering questions or parts that you are scared of that you don't understand

Solve or Simplify!!
- solve if you can. If you can't, solve a simpler problem!
- try to ignore something that is really giving you a difficult time

Look back and Refactor!!
- important step for becoming a better developer
- can you check the result?
- can you derive the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problems?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other ppl solved this?

// example, refactored code
function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.lowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

Problem Solving Patterns --------------------------------------------------------------------------------------------------
- frequency counter
- multiple pointers
- sliding window
- divide anad conquer
- greey algorithms
- dynamic programming
- backtracking, etc

1. Frequency Counter
- uses objects or sets to collect values/frequencies of values
- this can often avoid the need for nested loops or O(n^2) operations with arrays and strings
