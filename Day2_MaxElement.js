// Replace Elements with Greatest Element on Right Side

// Hint
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.


/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var max = -1
    for(i=arr.length-1; i>=0; i--){
        let temp = arr[i] 
        arr[i] = max;
        if(temp>max){
            max = temp
        }      
    }
    return arr;
};