/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let result=[];
    for(i=0;i<nums1.length;i++){
        for (j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                if(!result.includes(nums1[i])){
                    result.push(nums1[i])
                }
            }   
        }
    }
    return result;
};

// or

var intersection = function(nums1, nums2) {
    let result = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    for (let num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }
    
    return result;
}