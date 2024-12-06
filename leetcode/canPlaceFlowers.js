const canPlaceFlowers = (flowerbed, n) => {
    const length = flowerbed.length;
    let possible = 0;

    for (let i = 0; i < length; i++) {
        if (i === 0) {
            if (flowerbed[i] === 0 && flowerbed[i + 1] !== 1) {
                possible++;
                flowerbed[i] = 1;
            }
        } else if (i === length - 1) {
            if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1) {
                possible++;
                flowerbed[i] = 1;
            }
        } else {
            if (flowerbed[i] === 0 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1) {
                possible++;
                flowerbed[i] = 1;
            }
        }

        if (possible >= n) {
            return true;
        }
    }

    return false;
};

const flowerbed = [1,0,0,0,1], n = 2;
console.log(canPlaceFlowers(flowerbed, n));