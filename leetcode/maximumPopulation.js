// const maximumPopulation = (logs) => {
//     let maxYear = undefined;
//     const map = new Map();

//     for (const log of logs) {
//         for (let i = log[0]; i < log[log.length - 1]; i++) {
//             if (map.has(i)) {
//                 map.set(i, map.get(i) + 1);
//             } else {
//                 map.set(i, 1);
//             }

//             if (!maxYear || (map.get(i) > map.get(maxYear)) || (map.get(i) === map.get(maxYear) && i < maxYear)) {
//                 maxYear = i;
//             }
//         }
//     }

//     console.log(map);

//     return maxYear;
// };

const maximumPopulation = (logs) => {
    let maxYear = undefined;
    const map = new Map();
    let minBirthYear = Infinity;
    let maxDeathYear = -Infinity;
    let maxPopulation = -Infinity;
    let currentPopulation = 0;

    for (const log of logs) {
        if (map.has(log[0])) {
            map.set(log[0], map.get(log[0]) + 1);
        } else {
            map.set(log[0], 1);
        }

        if (map.has(log[1])) {
            map.set(log[1], map.get(log[1]) - 1);
        } else {
            map.set(log[1], -1);
        }

        minBirthYear = Math.min(log[0], minBirthYear);
        maxDeathYear = Math.max(log[1], maxDeathYear);
        
        if (!maxYear || (map.get(log[0]) > map.get(maxYear)) || (map.get(log[0]) === map.get(maxYear) && log[0] < maxYear)) {
            maxYear = log[0];
        }
    }

    maxYear = undefined;

    for (let i = minBirthYear; i < maxDeathYear; i++) {
        if (map.has(i)) {
            currentPopulation += map.get(i);
            if (currentPopulation > maxPopulation) {
                maxYear = i;
                maxPopulation = currentPopulation;
            }
        }
    }

    return maxYear;
};

const logs = [[1993,1999],[2000,2010]];
console.log(maximumPopulation(logs));