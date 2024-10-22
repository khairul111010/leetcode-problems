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

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a new element into the heap
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    // Remove the smallest element from the heap
    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    // Helper method to bubble up the last element
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Helper method to bubble down the root element
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (this.heap[leftChildIndex] < this.heap[index]) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                if (
                    (swapIndex === null && this.heap[rightChildIndex] < this.heap[index]) ||
                    (swapIndex !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])
                ) {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }

    // Return the smallest element in the heap
    peek() {
        return this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

var kthLargestLevelSum = function(root, k) {
    if(!root) return -1;
    let queue = [root];
     let minHeap = new MinHeap();

    while(queue.length > 0){
        let levelSize = queue.length;
        let currentLevelSum = 0;

        for(let i = 0; i < levelSize; i++){
            const node = queue.shift()
            currentLevelSum+= node.val

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        if (minHeap.size() < k) {
            minHeap.insert(currentLevelSum);
        } else if (currentLevelSum > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(currentLevelSum);
        }
    }

     return minHeap.size() === k ? minHeap.peek() : -1;
};