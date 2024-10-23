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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
     if (!root) return null;
    root.val = 0;
    
    let curr_level = [root];
    
    while (curr_level.length > 0) {
        let next_level = [];
        let next_sum = 0;
        
        // Calculate sum of next level
        for (let node of curr_level) {
            if (node.left) {
                next_level.push(node.left);
                next_sum += node.left.val;
            }
            if (node.right) {
                next_level.push(node.right);
                next_sum += node.right.val;
            }
        }
        
        // Process each node in current level
        for (let node of curr_level) {
            let children_sum = 0;
            if (node.left) children_sum += node.left.val;
            if (node.right) children_sum += node.right.val;
            
            // Update children values
            if (node.left) node.left.val = next_sum - children_sum;
            if (node.right) node.right.val = next_sum - children_sum;
        }
        
        curr_level = next_level;
    }
    
    return root;
};