// LeetCode Problem: Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;

    let sorts= s.split('').sort().join('');
    let sortt= t.split('').sort().join('');

    return sorts===sortt;
};


