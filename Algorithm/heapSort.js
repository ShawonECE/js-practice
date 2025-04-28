// To heapify a subtree rooted with node rootIndex
function heapify(array, heapSize, rootIndex) {
    let largestIndex = rootIndex;
    const leftChildIndex = 2 * rootIndex + 1;
    const rightChildIndex = 2 * rootIndex + 2;

    // If left child is larger than root
    if (leftChildIndex < heapSize && array[leftChildIndex] > array[largestIndex]) {
        largestIndex = leftChildIndex;
    }

    // If right child is larger than largest so far
    if (rightChildIndex < heapSize && array[rightChildIndex] > array[largestIndex]) {
        largestIndex = rightChildIndex;
    }

    // If largest is not root
    if (largestIndex !== rootIndex) {
        [array[rootIndex], array[largestIndex]] = [array[largestIndex], array[rootIndex]];

        // Recursively heapify the affected sub-tree
        heapify(array, heapSize, largestIndex);
    }
}

// alternative heapify using stack
// This version uses an iterative approach with a stack to avoid recursion
function heapifyUsingStack(array, heapSize, rootIndex) {
    const stack = [rootIndex];

    while (stack.length > 0) {
        const currentIndex = stack.pop();
        let largestIndex = currentIndex;

        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;

        if (leftChildIndex < heapSize && array[leftChildIndex] > array[largestIndex]) {
            largestIndex = leftChildIndex;
        }

        if (rightChildIndex < heapSize && array[rightChildIndex] > array[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== currentIndex) {
            [array[currentIndex], array[largestIndex]] = [array[largestIndex], array[currentIndex]];
            stack.push(largestIndex); // push the swapped child for further checking
        }
    }
}

function heapSort(array) {
    const length = array.length;

    // Build a max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    // Extract elements one by one from the heap
    for (let end = length - 1; end > 0; end--) {
        // Move current root to end
        [array[0], array[end]] = [array[end], array[0]];

        // call max heapify on the reduced heap
        heapify(array, end, 0);
    }
}

const numbers = [4, 10, 3, 5, 1];
console.log("Original Array:", numbers);

heapSort(numbers);
console.log("Sorted Array:", numbers);