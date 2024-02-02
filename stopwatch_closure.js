const stopWatch = () => {
    let startTime = Date.now();

    const getDelay = () =>{
        let delay = Date.now() - startTime;
        return delay;
    };

    return getDelay;
};

const timer = stopWatch();

// here the operation which execution time will be calculated
let sum = 0;
for (let index = 0; index < 10000000; index++) {
    sum += index;
}

console.log(sum);
console.log(`Time needed: ${timer()/1000} seconds`);