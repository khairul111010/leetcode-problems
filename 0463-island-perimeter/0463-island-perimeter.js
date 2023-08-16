/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
        const rows = grid.length;
    const cols = grid[0].length;
    let landCells = 0;
    let adjacentPairs = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                landCells++;

                // Check adjacent cells to the right and below
                if (row < rows - 1 && grid[row + 1][col] === 1) {
                    adjacentPairs++;
                }
                if (col < cols - 1 && grid[row][col + 1] === 1) {
                    adjacentPairs++;
                }
            }
        }
    }

    return 4 * landCells - 2 * adjacentPairs;
};