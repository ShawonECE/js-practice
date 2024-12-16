const getIntersectionNode = (headA, headB) => {
    let lengthA = 0, lengthB = 0;
    let tempA = headA, tempB = headB;

    while (tempA) {
        lengthA++;
        tempA = tempA.next;
    }

    while (tempB) {
        lengthB++;
        tempB = tempB.next;
    }

    tempA = headA, tempB = headB;
    let difference = Math.abs(lengthA - lengthB);

    if (difference > 0) {
        if (lengthB > lengthA) {
            for (let i = 0; i < difference; i++) {
                tempB = tempB.next;
            }
        } else {
            for (let i = 0; i < difference; i++) {
                tempA = tempA.next;
            }
        }
    }

    let intersect = null;

    while (tempA && tempB) {
        if (tempA === tempB) {
            intersect = tempA;
            break;
        } else {
            tempA = tempA.next;
            tempB = tempB.next;
        }
    }

    return intersect;
};