// Given an array of integers nums, return an array where all the even integers come before all the odd integers.
//// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParity = function(nums) {
 return nums.filter(i=>i%2==0).concat(nums.filter(i=>i%2!==0))
};

//or

var sortArrayByParity = function(nums) {
even=[]
odd= []
for (num of nums){
    if(num%2==0){
        even.push(num)
    }else{
        odd.push(num)
    }
}
return even.concat(odd)
};