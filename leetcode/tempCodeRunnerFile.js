while (left <= right) {
            if (left = right) {
                return word;
            }

            if (word[left] === word[right]) {
                left++;
                right--;
            } else {
                break;
            }
        }