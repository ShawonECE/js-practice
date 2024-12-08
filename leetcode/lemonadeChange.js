const lemonadeChange = (bills) => {
    const map = new Map([[5, 0], [10, 0], [20, 0]]);

    for (const bill of bills) {
        map.set(bill, map.get(bill) + 1);

        if (bill !== 5) {
            let change = bill - 5;
            if (change === 15) {
                if (map.get(10) > 0 && map.get(5) > 0) {
                    map.set(10, map.get(10) - 1);
                    map.set(5, map.get(5) - 1);
                } else if (map.get(5) > 2) {
                    map.set(5, map.get(5) - 3);
                } else {
                    return false;
                }
            } else if (change === 5) {
                if (map.get(5) > 0) {
                    map.set(5, map.get(5) - 1);
                } else {
                    return false;
                }
            }
        }
    }

    return true;
};

const bills = [5,5,10,10,20];
console.log(lemonadeChange(bills));