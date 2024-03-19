const findArray = (pref) => {
    const arr = [];
    arr[0] = pref[0];
    let current = arr[0];
    const length = pref.length;
    for (let i = 1; i < length; i++) {
        arr[i] = current^pref[i];
        current = current^arr[i];
    }
    return arr;
};

const pref = [13];
console.log(findArray(pref));