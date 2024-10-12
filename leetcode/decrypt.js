const decrypt = (code, k) => {
    const res = [];
    const k_abs = Math.abs(k);
    const length = code.length;
    if (k === 0) {
        for (let i = 0; i < length; i++) {
            res[i] = 0;
        }
    } else if (k > 0) {
        let sum = 0;
        for (let i = 0; i < k_abs; i++) {
            sum += code[i];
        }

        for (let i = 0; i < length; i++) {
            let j = (i + k_abs) % length;
            sum = sum - code[i] + code[j];
            res[i] = sum;
        }
    } else {
        let sum = 0;
        for (let i = length - 1; i >= length - k_abs; i--) {
            sum += code[i];
        }
        
        for (let i = length - 1; i >= 0; i--) {
            let j = (i - k_abs + length) % length;
            sum = sum - code[i] + code[j];
            res[i] = sum;
        }
    }
    return res;
};

code = [2,4,9,3], k = -2;
console.log(decrypt(code, k));