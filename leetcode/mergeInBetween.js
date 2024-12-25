const mergeInBetween = (list1, a, b, list2) => {
    let beforeA, afterB;
    let current = list1;
    let i = 0;

    while(i <= b + 1) {
        if (i === a - 1) {
            beforeA = current;
        }

        if (i === b + 1) {
            afterB = current;
        }

        i++;
        current = current.next;
    }

    beforeA.next = list2;
    current = list2;

    while(current.next) {
        current = current.next;
    }

    current.next = afterB;

    return list1;
};