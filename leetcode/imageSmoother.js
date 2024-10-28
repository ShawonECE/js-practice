// const imageSmoother = (img) => {
//     const copyImg = [];
//     for (const row of img) {
//         const newRow = [];
//         for (const element of row) {
//             newRow.push(element);
//         }
//         copyImg.push(newRow);
//     }
//     const rows = img.length;
//     const cols = img[0].length;

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             let neighbors = 0;
//             let sum = img[i][j];

//             if (i !== 0) {
//                 if (img[i - 1][j] || img[i - 1][j] === 0) {
//                     sum = sum + img[i - 1][j];
//                     neighbors++;
//                 }

//                 if (img[i - 1][j - 1] || img[i - 1][j - 1] === 0) {
//                     sum = sum + img[i - 1][j - 1];
//                     neighbors++;
//                 }

//                 if (img[i - 1][j + 1] || img[i - 1][j + 1] === 0) {
//                     sum = sum + img[i - 1][j + 1];
//                     neighbors++;
//                 }
//             }

//             if (i !== rows - 1) {              
//                 if (img[i + 1][j] || img[i + 1][j] === 0) {
//                     sum = sum + img[i + 1][j];
//                     neighbors++;
//                 }

//                 if (img[i + 1][j - 1] || img[i + 1][j - 1] === 0) {
//                     sum = sum + img[i + 1][j - 1];
//                     neighbors++;
//                 }

//                 if (img[i + 1][j + 1] || img[i + 1][j + 1] === 0) {
//                     sum = sum + img[i + 1][j + 1];
//                     neighbors++;
//                 }
//             }            

//             if (img[i][j - 1] || img[i][j - 1] === 0) {
//                 sum = sum + img[i][j - 1];
//                 neighbors++;
//             }

//             if (img[i][j + 1] || img[i][j + 1] === 0) {
//                 sum = sum + img[i][j + 1];
//                 neighbors++;
//             }

//             copyImg[i][j] = Math.floor(sum / (neighbors + 1));

//         }
//     }
//     return copyImg;
// };

const imageSmoother = (img) => {
    const rows = img.length;
    const cols = img[0].length;
    
    const copyImg = Array.from(img, row => [...row]);

    const inBounds = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let neighbors = 0;
            let sum = 0;

            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const ni = i + x;
                    const nj = j + y;

                    if (inBounds(ni, nj)) {
                        sum += img[ni][nj];
                        neighbors++;
                    }
                }
            }

            copyImg[i][j] = Math.floor(sum / neighbors);
        }
    }

    return copyImg;
};


const img = [[100,200,100],[200,50,200],[100,200,100]];
console.log(imageSmoother(img));