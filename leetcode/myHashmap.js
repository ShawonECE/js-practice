class MyHashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        if(this.map[key] || this.map[key] === 0) {
            return this.map[key];
        } else {
            return -1;
        }
    }

    remove(key) {
        delete this.map[key];
    }
}

// class MyHashMap {
//     constructor() {
//         this.map = [];
//     }

//     put(key, value) {
//         let updated = false;
//         for (const entry of this.map) {
//             if (entry[0] === key) {
//                 entry[1] = value;
//                 updated = true;
//             }
//         }

//         if (!updated) {
//             this.map.push([key, value]);
//         }
//     }

//     get(key) {
//         for (const entry of this.map) {
//             if (entry[0] === key) {
//                 return entry[1];
//             }
//         }
//         return -1;
//     }

//     remove(key) {
//         for (const idx in this.map) {
//             if (this.map[idx][0] === key) {
//                 this.map.splice(idx, 1);
//             }
//         }
//     }
// }

const myHashMap = new MyHashMap();
myHashMap.put(1, 1);
myHashMap.put(2, 2);
console.log(myHashMap.get(1));
console.log(myHashMap.get(3));
myHashMap.put(2, 1);
console.log(myHashMap.get(2));
console.log(myHashMap.remove(2));
console.log(myHashMap.get(2));
console.log(myHashMap.map);

