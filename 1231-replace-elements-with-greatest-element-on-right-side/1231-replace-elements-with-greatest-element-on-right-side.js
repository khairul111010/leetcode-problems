/**
 * @param {number[]} arr
 * @return {number[]}
 */


var replaceElements = function(arr) {
    let mx = -1
    for(let i = arr.length - 1; i >= 0; i--){
        let curr = arr[i]
        arr[i] = mx
        mx = Math.max(mx,curr)
    }
    return arr
};