// const solveLinearEquations = (a, b, c, d, e, f) => {
//     const determinant = a * e - b * d;

//     if (determinant === 0) {
//         return undefined;
//     }

//     const x = (c * e - b * f) / determinant;
//     const y = (a * f - c * d) / determinant;

//     return [x, y];
// }

const isRectangleOverlap = (rec1, rec2) => {
    if (rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[3] <= rec2[1] || rec1[1] >= rec2[3]) {
        return false;
    } else {
        return true;
    }
};

const rec1 = [0,0,1,1], rec2 = [2,2,3,3];
console.log(isRectangleOverlap(rec1, rec2));
