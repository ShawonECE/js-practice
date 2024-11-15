const isPalindrome = (head) => {
    const stack = [];

    const iterator = (currentNode) => {
        stack.push(currentNode.val);
        if (currentNode.next) {
            return iterator(currentNode.next);
        } else {
            return;
        }
    };

    iterator(head);

    let i = 0, j = stack.length - 1;
    while (i <= j) {
        if (stack[i] !== stack[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
};

console.log(isPalindrome(list));

