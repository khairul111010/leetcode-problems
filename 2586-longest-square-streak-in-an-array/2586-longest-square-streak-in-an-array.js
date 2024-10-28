/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
     // Convert the array to a set for O(1) lookups
    const numSet = new Set(nums);
    const memo = new Map();
    let maxLength = 0;

    // Function to find the length of the square streak starting from 'num'
    function findStreak(num) {
        if (memo.has(num)) return memo.get(num);

        let length = 0;
        let current = num;
        
        while (numSet.has(current)) {
            length++;
            current = current * current;
        }

        // Cache the streak length for the starting number
        memo.set(num, length);
        return length;
    }

    // Iterate through each number to find the longest streak
    for (let num of nums) {
        maxLength = Math.max(maxLength, findStreak(num));
    }

    // Return -1 if no streak of at least 2 perfect squares is found
    return maxLength > 1 ? maxLength : -1;
};