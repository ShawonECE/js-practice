let scripts = require('./scripts.js');

const text = 'আমি তোমাকে ভালবাসি I love you I need you';

const charScript = code => {
    const script = scripts.find(script => script.ranges.some(([from, to]) => code >= from && code < to)); 
    return script || null;
};

// console.log(charScript(2530));

const countByGroup = (items, groupName) => {
    let results = [];
    for (let item of items) {
        const name = groupName(item);
        const same = results.find(result => result.name === name);
        if (!same) {
            results.push({name, count: 1});
        } else {
            same.count++;
        }
    }
    return results;
};

// console.log(countByGroup(array, n => n > 2));

const dominantScript = text => {
    const scriptsInText = countByGroup(text, char => {
        const script = charScript(char.codePointAt(0));
        return script ? script.name : null;    
    }).filter(script => script.name !== null);

    const biggestCount = scriptsInText.reduce((biggest, {count}) => count > biggest ? count : biggest, 0);
    const dominant = [];
     for (let script of scriptsInText) {
        if (script.count === biggestCount) {
            dominant.push(script.name);
        }
     }
    return dominant;
};

const dominantDirection = text => {
    const dominantScripts = dominantScript(text);
    const directions = [];
    for (let script of dominantScripts) {
        const fullScript = scripts.find(item => item.name === script);
        directions.push(fullScript.direction);
    }
    return directions;
};

console.log(dominantScript(text));
console.log(dominantDirection(text));