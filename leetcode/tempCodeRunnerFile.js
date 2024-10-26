let point1 = points[i];
                let point2 = points[j];
                let point3 = points[k];
                let area = 0.5 * Math.abs(point1[0] * (point2[1] - point3[1]) + point2[0] * (point3[1] - point1[1]) + point3[0] * (point1[1] - point2[1]))
                maxArea = Math.max(maxArea, area);