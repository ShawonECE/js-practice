export const listPrint = (head) => {
    if (!head) {
        console.log(null);
    }

    let listValues = '';
    while (head) {
        listValues += `${head.val}  `;
        head = head.next;
    }

    console.log(listValues);
};