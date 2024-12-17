const getDecimalValue = (head) => {
    let binaryStr = "";
    let temp = head;

    while(temp) {
        binaryStr += temp.val.toString();
        temp = temp.next;
    }

    return parseInt(binaryStr, 2);
};