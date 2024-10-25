// const reverseStr = (s, k) => {
//     const length = s.length;
//     const partitions = [];
//     let partition = [];
//     let reversed = "";
//     for (let i = 0; i < length; i++) {
//         partition.push(s[i]);
//         if ((i + 1) % (2*k) === 0 || i === length - 1) {
//             partitions.push(partition);
//             partition = [];
//         }
//     }
//     for (let j = 0; j < partitions.length; j++) {
//         let left = 0, right;
//         if (partitions[j].length < k) {
//             right = partitions[j].length - 1;
//         } else {
//             right = k - 1;
//         }

//         while (left < right) {
//             [partitions[j][left], partitions[j][right]] = [partitions[j][right], partitions[j][left]];
//             left++;
//             right--;
//         }

//         reversed = reversed + partitions[j].join('');
//     }
//     return reversed;
// };

const reverseStr = (s, k) => {
    const cycles = Math.ceil(s.length / ( 2*k ));
    const chars = s.split('');
    for (let cycle = 0; cycle < cycles; cycle++) {
        let remainingChars = s.length - cycle*2*k;
        let i = cycle*2*k;
        let j;
        if (remainingChars < k) {
            j = s.length - 1;
        } else {
            j = i + k - 1;
        }
                
        while (i < j) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            i++;
            j--;
        }
    }
    return chars.join('');
};

const s = "abcdefg", k = 2;
console.log(reverseStr(s, k));
