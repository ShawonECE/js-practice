const fibGenerator = function*() {
    let previous = 0, next = 1;
    while(true) {
        yield previous;
        temp = previous + next;
        previous = next;
        next = temp;
    }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);