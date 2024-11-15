const mergeTwoLists = (list1, list2) => {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    const dummy = {val: -101, next: null};
    let current = dummy;

    while (list1 || list2) {
        if (!list1) {
            current.next = list2;
            break;
        }

        if (!list2) {
            current.next = list1;
            break;
        }

        if (list1.val <= list2.val) {
            current.next = {
                val: list1.val,
                next: null
            };

            list1 = list1.next;
        } else {
            current.next = {
                val: list2.val,
                next: null
            };
            list2 = list2.next;
        }

        console.log(dummy);
        current = current.next;
    }

    return dummy.next;
};

const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};

const list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};

console.log(mergeTwoLists(list1, list2));
