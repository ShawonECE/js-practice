const dailyTemperatures = (temperatures) => {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        // if (stack.length && temperatures[i] > stack[stack.length - 1].val) {
        while(stack.length && temperatures[i] > stack[stack.length - 1].val) {
            let current = stack.pop();
            result[current.pos] = i - current.pos;
        }
        // }

        stack.push({ val: temperatures[i], pos: i });
    }

    return result;
    
};

const temperatures = [30,40,50,60];
console.log(dailyTemperatures(temperatures));