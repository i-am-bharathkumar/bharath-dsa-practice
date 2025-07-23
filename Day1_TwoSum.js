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