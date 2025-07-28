//question link: https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
//example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// var twoSum = function(nums, target) {
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return[i,j]
//             }
//         }
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const map= new Map();
  for (i=0;i<nums.length; i++){
    num= nums[i];
    compliment = target-num;
    if(map.has(compliment)){
        return[map.get(compliment),i]
    }
    map.set(num,i)
  }
};