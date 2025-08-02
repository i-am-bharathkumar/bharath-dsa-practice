// LeetCode Problem: Intersection of Two Arrays II
// Given two arrays, return their intersection.
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

var intersect = function(nums1, nums2) {
    const result = []; // Step 1: store matches here
    const used = new Array(nums2.length).fill(false); // Step 2: track used nums2 values

    for (let i = 0; i < nums1.length; i++) { // Step 3: pick each number from nums1
        for (let j = 0; j < nums2.length; j++) { // Step 4: compare with nums2 numbers
            if (!used[j] && nums1[i] === nums2[j]) { // Step 5: match & unused?
                result.push(nums1[i]); // Step 6: add to result
                used[j] = true; // Step 7: mark nums2[j] as used
                break; // Step 8: stop checking this nums1[i]
            }
        }
    }

    return result; // Step 9: return all matches
};



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const freq = new Map(); // Step 1: to store number counts from nums1
    const result = [];      // Step 2: to store matches

    // Step 3: Count frequency of each number in nums1
    for (let num of nums1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Step 4: Check nums2 numbers against the map
    for (let num of nums2) {
        if (freq.get(num) > 0) { // Step 5: exists in map & count > 0?
            result.push(num); // Step 6: add to result
            freq.set(num, freq.get(num) - 1); // Step 7: decrease count
        }
    }
    return result; // Step 8: return all matches
};