const smallestEquivalentString = (s1, s2, baseStr) => {
    const par = {};
    let ans = "";

    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 97);
        par[char] = char;
    }

    const find = (char) => {
        if(par[char] === char) {
            return char;
        }
        const parent = find(par[char]);
        par[char] = parent;
        return parent;
    };
    
    const union = (char1, char2) => {
        const parent1 = find(char1);
        const parent2 = find(char2);
    
        if (parent1 === parent2) {
            return;
        }
    
        if (parent1 < parent2) {
            par[parent2] = parent1;
        } else {
            par[parent1] = parent2;
        }
    };

    for (let i = 0; i < s1.length; i++) {
        union(s1[i], s2[i]);
    }

    for (const char of baseStr) {
        ans += find(char);
    }

    return ans;
};

const s1 = "parker", s2 = "morris", baseStr = "parser";
console.log(smallestEquivalentString(s1, s2, baseStr));