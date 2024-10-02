/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
    
    const rankMap = new Map();
    uniqueSorted.forEach((value, index) => {
        rankMap.set(value, index + 1);
    });
    
    return arr.map(value => rankMap.get(value));
};