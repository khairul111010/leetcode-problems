/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    const m = grid.length; // number of rows
    const n = grid[0].length; // number of columns
    const memo = Array.from({ length: m }, () => Array(n).fill(-1)); // Memoization table

    // Directions for moving: up-right, right, down-right
    const directions = [
        [-1, 1], // (row - 1, col + 1)
        [0, 1],  // (row, col + 1)
        [1, 1]   // (row + 1, col + 1)
    ];

    function dfs(row, col) {
        // If already calculated, return the stored value
        if (memo[row][col] !== -1) {
            return memo[row][col];
        }
        
        let maxMovesFromCurrent = 0;

        // Explore possible moves
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            // Check if the new position is within bounds and has a greater value
            if (newRow >= 0 && newRow < m && newCol < n && grid[newRow][newCol] > grid[row][col]) {
                maxMovesFromCurrent = Math.max(maxMovesFromCurrent, 1 + dfs(newRow, newCol));
            }
        }
        
        // Store the result in memo table
        memo[row][col] = maxMovesFromCurrent;
        return maxMovesFromCurrent;
    }

    let overallMaxMoves = 0;

    // Start DFS from every cell in the first column
    for (let i = 0; i < m; i++) {
        overallMaxMoves = Math.max(overallMaxMoves, dfs(i, 0));
    }

    return overallMaxMoves;
};