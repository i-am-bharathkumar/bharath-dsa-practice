// LeetCode Problem: First Unique Character in a String
// Problem Link: https://leetcode.com/problems/first-unique-character-in-a-string/
// Time Complexity: O(n)
// Space Complexity: O(n)
//// This function finds the index of the first non-repeating character in a string.
// If no such character exists, it returns -1.
// Example: Input: "leetcode", Output: 0
// Example: Input: "loveleetcode", Output: 2
// Example: Input: "aabb", Output: -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};