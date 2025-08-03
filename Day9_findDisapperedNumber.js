// Given an array nums of n integers where n > 0 and all integers are in the range [1, n],
// some elements appear twice and others appear once, find all the elements of [1, n] 
// inclusive that do not appear in this array.

//using extra space(O(n) time, O(n) space):
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums)
    let result=[]
    for (i=1; i<=nums.length; i++){
        if(set.has(i)){
            result.push(i)
        }
    }
    return result;
};

// Alternative solution using index marking(O(n) time, O(1) space)(without using extra space):
function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    }
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
}
