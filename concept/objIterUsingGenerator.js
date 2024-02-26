class Obj {
    constructor(val1, val2, val3, val4) {
        this.value1 = val1;
        this.value2 = val2;
        this.value3 = val3;
        this.value4 = val4;
    }
}

// here is the generator function to make objects iterable
function* makeIterable(obj) {
    for (let key in obj) {
        yield obj[key];
    }
}

const object = new Obj(4, 5, 1, 8);
const iterable = makeIterable(object);

for (let element of iterable) {
    console.log(element);
}
