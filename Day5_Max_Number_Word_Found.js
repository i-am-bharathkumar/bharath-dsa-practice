// Given an array of strings sentences, each sentence is a single line of text,
// // You need to find the maximum number of words that appear in a single sentence.

// class Solution {
//     public int mostWordsFound(String[] sentences) {
//         var max=0;
//         for(var sentence:sentences){
//             var count= sentence.split(" ").length;
//             if(count>max){
//                 max=count;
//             }
//         }
//         return max;
//     }
// }

//or

function mostWordsFound(sentences) {
    let max = 0;
    for (let sentence of sentences) {
        let count = sentence.split(" ").length;
        if (count > max) {
            max = count;
        }
    }
    return max;
}