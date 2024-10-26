const largestTriangleArea = (points) => {
    const length = points.length;
    let maxArea = 0;
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                let point1 = points[i];
                let point2 = points[j];
                let point3 = points[k];
                let area = 0.5 * Math.abs(point1[0] * (point2[1] - point3[1]) + point2[0] * (point3[1] - point1[1]) + point3[0] * (point1[1] - point2[1]))
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};

const points = [[1,0],[0,0],[0,1]];
console.log(largestTriangleArea(points));