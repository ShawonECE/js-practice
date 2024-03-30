let successor = nums.indexOf(Math.min(...larger));
            let tempo = nums[key];
            nums[key] = nums[successor];
            nums[successor] = tempo;
            let array = nums.slice(key + 1);
            array.sort((a, b) => a - b);
            for (let i = 0; i < last - key; i++) {
                nums[key + 1 + i] = array[i];
            }