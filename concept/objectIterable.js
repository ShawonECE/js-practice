// const array = [1, 2, 3];

// const arrayIter = array[Symbol.iterator]();
// console.log(arrayIter.next());
// console.log(arrayIter.next());
// console.log(arrayIter.next());
// console.log(arrayIter.next());

class IterableObj {
    constructor(val1, val2, val3, val4) {
        this[0] = val1;
        this[1] = val2;
        this[2] = val3;
        this[3] = val4;
    }

    [Symbol.iterator]() {
        let current = 0;
        const obj = this;
        return {
            next() {
                if (obj[current]) {
                    const result = {
                        done: false,
                        value: obj[current]
                    };
                    current++;
                    return result;
                }
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }
}

const obj = new IterableObj(2, 3, 4, 5);
// const iterator = obj[Symbol.iterator]();

for (const element of obj) {
    console.log(element);
}

// console.log([...obj]);