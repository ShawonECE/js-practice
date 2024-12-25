const reverse = (leftNode, rightNode) => {
    let currentNode = leftNode;
    let previousNode = null;

    while (currentNode !== rightNode) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    currentNode.next = previousNode;
}

const reverseBetween = (head, left, right) => {
    if (left === right) {
        return head;
    }

    let leftNode = null;
    let rightNode = null;
    let leftPrev = null;
    let rightNext = null;

    let temp = head;
    let i = 1;

    while(i <= right) {
        if (i === left - 1) {
            leftPrev = temp;
        }

        if(i === left) {
            leftNode = temp;
        }

        if(i === right) {
            rightNode = temp;
            rightNext = rightNode.next;
        }

        temp = temp.next;
        i++;
    }

    reverse(leftNode, rightNode);

    if (leftPrev) {
        leftPrev.next = rightNode;
    } else {
        head = rightNode;
    }

    leftNode.next = rightNext;
    return head;
};