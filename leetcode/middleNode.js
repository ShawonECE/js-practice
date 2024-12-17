const middleNode = (head) => {
    let length = 0;
    let temp = head;
    while (temp) {
        length++;
        temp = temp.next;
    }
    let middleIdx;
    if (length % 2 === 0) {
        middleIdx = (length / 2) + 1; 
    } else {
        middleIdx = (length + 1) / 2;
    }
    temp = head;
    for (let i = 0; i < middleIdx - 1; i++) {
        temp = temp.next;
    }

    return temp;
};