// const solveLinearEquations = (a, b, c, d, e, f) => {
//     const determinant = a * e - b * d;

//     if (determinant === 0) {
//         return undefined;
//     }

//     const x = (c * e - b * f) / determinant;
//     const y = (a * f - c * d) / determinant;

//     return [x, y];
// }

// const isRectangleOverlap = (rec1, rec2) => {
//     const rec1_sides = {
//         1: {
//             a: 1,
//             b: 0,
//             c: rec1[0]
//         },
//         2: {
//             a: 0,
//             b: 1,
//             c: rec1[1]
//         },
//         3: {
//             a: 1,
//             b: 0,
//             c: rec1[2]
//         },
//         4: {
//             a: 0,
//             b: 1,
//             c: rec1[3]
//         },
//     };

//     const rec2_sides = {
//         1: {
//             a: 1,
//             b: 0,
//             c: rec2[0]
//         },
//         2: {
//             a: 0,
//             b: 1,
//             c: rec2[1]
//         },
//         3: {
//             a: 1,
//             b: 0,
//             c: rec2[2]
//         },
//         4: {
//             a: 0,
//             b: 1,
//             c: rec2[3]
//         },
//     };

//     let intersections = 0;

//     for (const side1 in rec1_sides) {
//         for (const side2 in rec2_sides) {
//             const intersection = solveLinearEquations(side1.a, side1.b, side1.c, side2.a, side2.b, side2.c);
//             if (intersection) {
//                 intersections++;
//             }
//         }
//     }

//     return intersections;
// };

const isRectangleOverlap = (rec1, rec2) => {
    if (rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[3] <= rec2[1] || rec1[1] >= rec2[3]) {
        return false;
    } else {
        return true;
    }
};

const rec1 = [0,0,1,1], rec2 = [2,2,3,3];
console.log(isRectangleOverlap(rec1, rec2));
