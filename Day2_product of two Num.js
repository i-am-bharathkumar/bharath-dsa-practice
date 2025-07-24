// Given an array of integers, return the maximum product of two elements in the array after subtracting 1 from each of them.

// for java
// class Solution {
//     public int maxProduct(int[] nums) {
//         let max1 =0;
//         let max2=0;
//         for(let num of nums){
//             if(num>max1){
//                 max2= max1;
//                 max1= num;
//             }else if(num>max2){
//                 max2= num;
//             }
//         }return (max1-1)*(max2-1)
//     }
// }

// for javascript

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1=0; 
    let max2=0;
    for(let num of nums){
        if(num>max1){
            max2=max1;
            max1= num;
        }else if(num>max2){
            max2=num
        }
    }
    return (max1-1)*(max2-1)
};