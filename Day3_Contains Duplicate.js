// LeetCode Problem: Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(i=0;i<nums.length;i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i]==nums[j]){
                return true;
            }    
        }
    }
    return false;
};

//or

var containsDuplicate = function(nums) {
    let set = new Set();        // 1️⃣ create an empty Set

    for (let num of nums) {     // 2️⃣ go through each number in the array
        if (set.has(num))       // 3️⃣ if set already has the number, it's a duplicate
            return true;
        set.add(num);           // 4️⃣ if not, add it to the set
    }

    return false;               // 5️⃣ if no duplicates found after checking all, return false
};
