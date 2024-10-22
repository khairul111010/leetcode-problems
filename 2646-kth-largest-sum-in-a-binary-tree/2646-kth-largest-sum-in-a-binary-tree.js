/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */



var kthLargestLevelSum = function(root, k) {
    if(!root) return -1;
    let queue = [root];
    let levelSums = [];

    while(queue.length > 0){
        let levelSize = queue.length;
        let currentLevelSum = 0;

        for(let i = 0; i < levelSize; i++){
            const node = queue.shift()
            currentLevelSum+= node.val

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        levelSums.push(currentLevelSum);
    }

    levelSums.sort((a,b) => b - a);

    if(k <= levelSums.length) {
        return levelSums[k -1];
    }

    return -1;
};