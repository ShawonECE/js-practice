const isAnagram = (s, t) => {
    const sLength = s.length;
    const tLength = t.length;
    if (sLength !== tLength) {
        return false;
    }
    const sMemo = {};
    const tMemo = {};
    for (let i = 0; i < sLength; i++) {
        if (sMemo[s[i]]) {
            sMemo[s[i]] = sMemo[s[i]] + 1;
        } else {
            sMemo[s[i]] = 1;
        }     
        
        if (tMemo[t[i]]) {
            tMemo[t[i]] = tMemo[t[i]] + 1;
        } else {
            tMemo[t[i]] = 1;
        } 
    }

    for (const key in sMemo) {
        if (sMemo[key] !== tMemo[key]) {
            return false;
        }
    }
    return true;
};

const s = "rat", t = "car";
console.log(isAnagram(s, t));