const maximumGain = (s, x, y) => {
    let stack = [];
    let remove1 = {value: 'ab', point: x};
    let remove2 = {value: 'ba', point: y};
    let points = 0;

    if (x < y) {
        [remove1, remove2] = [remove2, remove1];
    }

    for (const char of s) {
        if (char === remove1.value[1] && stack[stack.length - 1] === remove1.value[0]) {
            stack.pop();
            points += remove1.point;
        } else {
            stack.push(char);
        }
    }

    s = stack.join('');
    stack = [];

    for (const char of s) {
        if (char === remove2.value[1] && stack[stack.length - 1] === remove2.value[0]) {
            stack.pop();
            points += remove2.point;
        } else {
            stack.push(char);
        }
    }

    return points;
};

const s = "aabbaaxybbaabb", x = 5, y = 4;
console.log(maximumGain(s, x, y));