// write a fn called findLongestSubstring
// which accepts a string and returns the length of the longest
// substring with all distinct characters

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

// sliding window approach
// for this approach, i need a start and end to define the window??
// solution says I only need to keep track of start
// I also need to keep track of the length of the longest
// use a hash table to keep track of what we've seen



function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

   //findLongestSubstring('rithmschool') // 7

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }