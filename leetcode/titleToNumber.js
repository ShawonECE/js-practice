const titleToNumber = (columnTitle) => {
    const length = columnTitle.length;
    let num = 0;
    let j = 0;

    for (let i = length - 1; i >= 0; i--) {
        num = num + (columnTitle.charCodeAt(i) - 64) * (26**j);
        j++;
    }
    return num;
};