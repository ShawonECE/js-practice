const sortPeople = (names, heights) => {
    const length = heights.length;

    for (let i = 0; i < length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (heights[j] > heights[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            let temp = heights[i];
            heights[i] = heights[maxIndex];
            heights[maxIndex] = temp;

            temp = names[i];
            names[i] = names[maxIndex];
            names[maxIndex] = temp;
                
        }
    }
    return names;
};

const names = ["Alice","Bob","Bob"], heights = [155,185,150];
console.log(sortPeople(names, heights));