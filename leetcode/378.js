// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }

//     get size() {
//         return this.heap.length;
//     }

//     get isEmpty() {
//         return this.size === 0;
//     }

//     get peek() {
//         if (!this.isEmpty) {
//             return this.heap[0];
//         }
//     }

//     compare(a, b) {
//         return a > b;
//     }

//     push(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         let parentIndex = this.getParentIndex(index);

//         while (index > 0 && this.compare(this.heap[index], this.heap[parentIndex])) {
//             this.swap(index, parentIndex);
//             index = parentIndex;
//             parentIndex = this.getParentIndex(index);
//         }
//     }

//     pop() {
//         if (this.heap.length === 0) {
//             return;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }

//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);

//         return max;
//     }

//     heapifyDown(index) {
//         let largest = index;
//         const leftChildIndex = this.getLeftChildIndex(index);
//         const rightChildIndex = this.getRightChildIndex(index);

//         if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[largest])) {
//             largest = leftChildIndex;
//         }

//         if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[largest])) {
//             largest = rightChildIndex;
//         }

//         if (largest !== index) {
//             this.swap(index, largest);
//             this.heapifyDown(largest);
//         }
//     }
// }

// const kthSmallest = (matrix, k) => {
//     const heap = new MaxHeap();

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (heap.size < k) {
//                 heap.push(matrix[i][j]);
//             } else if (matrix[i][j] < heap.peek) {
//                 heap.pop();
//                 heap.push(matrix[i][j]);
//             }
//         }
//     }

//     return heap.peek;
// };


const countOfLessOrEqualNumbers = (arr, target) => {
    if(arr[0] > target) return 0;
    if(arr[arr.length - 1] <= target) return arr.length;

    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            count = mid + 1;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return count;
};

const kthSmallest = (matrix, k) => {
    let n = matrix.length;
    let min = matrix[0][0];
    let max = matrix[n - 1][n - 1];
    let ans = -1;

    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        let count = 0;

        for (let i = 0; i < n; i++) {
            count += countOfLessOrEqualNumbers(matrix[i], mid);
        }

        if(count >= k) {
            ans = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return ans;
};

const matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8;
console.log(kthSmallest(matrix, k));
// console.log(countOfLessOrEqualNumbers([1, 3, 7, 9, 10, 11, 13], 4));