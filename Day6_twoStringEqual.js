// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let str1 = word1.concat("");
  let str2 = word2.concat("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};
