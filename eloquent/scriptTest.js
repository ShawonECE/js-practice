let scripts = require('./scripts.js');

// const filter = (array, test) => {
//     let passed = [];
//     array.forEach(item => {
//         if (test(item)) {
//             passed.push(item);
//         }
//     })
//     return passed;
// };

// console.log(scripts.filter(scripts => scripts.direction === 'ttb'));
//console.log(filter(scripts, script => script.living));

// const charCount = script => {
//     return script.ranges.reduce((a, [from, to]) => a + (to - from), 0);
// };
// console.log(charCount(scripts[0]));
//const maxCharScript = scripts.reduce((a, b) => charCount(a) > charCount(b) ? a : b);
//console.log(maxCharScript);

// const minCharScript = scripts.reduce((a, b) => charCount(a) < charCount(b) ? a : b);
// console.log(minCharScript);

const charScript = code => {
    for (let script of scripts) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
};

//console.log(charScript(11011));

const countBy = (items, groupName) => {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if (known === -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
};

const text = 'আমি তোমাকে ভালবাসি I love you';
//console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

const textScripts = text => {
    let scripts = countBy(text, char => {
        let script = charScript(char.codePointAt(0));
        return script ? script.name : 'none';
    }).filter(({name}) => name !== 'none');
    
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total === 0) return 'No scripts found';
    else return scripts.map(({name, count}) => `${Math.round(count * 100 / total)}% ${name}`).join(', ');
};

console.log(textScripts(text));