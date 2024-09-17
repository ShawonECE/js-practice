const array = [8, 10, 1, 3, 56, 5, 7];

const bubbleSortAsc = (array) => {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let isSwapped = false; // taking a boolean value to indicate unnecessary iteration
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSwapped = true; // indicates swap at least once
            }
        }

        if (!isSwapped) {
            break; // ending unnecessary iteration
        }
    }
};

const bubbleSortDesc = (array) => {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let isSwapped = false; // taking a boolean value to indicate unnecessary iteration
        for (let j = 0; j < length - 1 - i; j++) {
         if (array[j] < array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            isSwapped = true; // indicates swap at least once
         }          
        }

        if (!isSwapped) {
            break; // ending unnecessary iteration
        }
    }
};

bubbleSortAsc(array);

console.log(array);