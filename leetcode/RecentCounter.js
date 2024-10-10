class RecentCounter {
    constructor() {
        this.requests = [];
        this.pointer = null;
    };

    push(t) {
        if (!this.requests.length) {
            this.requests.push(t);
            this.pointer = 0;
        } else {
            if (this.requests[this.pointer] >= t - 3000) {
                this.requests.push(t);
            } else {
                this.requests.push(t);
                for (let i = this.pointer; i < this.requests.length; i++) {
                    if (this.requests[i] >= t - 3000) {
                        this.pointer = i;
                        break;
                    }
                }
            }
        }
    };

    ping(t) {
        if (!t) {
            return null;
        }
        this.push(t);
        return this.requests.length - this.pointer;
    };
};

const obj = new RecentCounter();
console.log(obj.ping());
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));


// var RecentCounter = function() {
//     this.requests = [];
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//     if (!t) {
//             return null;
//         }
//         const range = [t - 3000, t];
//         this.requests.push(t);
//         const length = this.requests.length;
//         for (let i = length - 1; i >= 0; i--) {
//             if (this.requests[i] < range[0]) {
//                 return length - i - 1;
//             }
//         }
//         return length;
// };