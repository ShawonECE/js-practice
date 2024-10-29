const countNegatives = (grid) => {
    const findFirstNegative = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
      
        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
      
          if (arr[mid] < 0) {
            result = mid;
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }
        return result;
      }

      const rows = grid.length;
      const cols = grid[0].length;
      let negatives = 0;
      for (let i = 0; i < rows; i++) {
        let firstNegative = findFirstNegative(grid[i]);
        if (firstNegative > -1) {
            negatives = negatives + cols - firstNegative;
        }
      }

      return negatives;
};


const grid = [[3,2],[1,0]];
console.log(countNegatives(grid));