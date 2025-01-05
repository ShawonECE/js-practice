const commonFactors = (a, b) => {
    let commonFactors = new Set;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const num = Math.ceil(Math.sqrt(min));

    for (let i = 1; i <= num; i++) {
        if (min % i === 0) {
            if (max % i === 0) {
                commonFactors.add(i);
            }
            
            if ((max % (min / i)) === 0) {
                commonFactors.add(min / i);
            }
        }
    }

    return commonFactors.size;
};

const a = 12, b = 6;
console.log(commonFactors(a, b));