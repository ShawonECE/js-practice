const numberOfAlternatingGroups = (colors) => {
    let groups = 0;
    for (let i = 0; i < colors.length; i++) {
        let j = (i + 2) % colors.length;
        let k = (i + 1) % colors.length;
        if (colors[i] === colors[j] && colors[i] !== colors[k]) {
            groups++;
        }
    }
    return groups;
};

const colors = [0,1,0,0,1];
console.log(numberOfAlternatingGroups(colors));
