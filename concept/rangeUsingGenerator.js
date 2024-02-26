function* range(start, end, step = 1) {
    for (let i = start; i <= end; i = i + step) {
        yield i;        
    }
}

// const myRange = range(1, 10, 2);

for (const element of range(0, 30, 5)) {
    console.log(element);
}