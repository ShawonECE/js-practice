class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let sum = 0, length = key.length;
        for (let i = 0; i < length; i++) {
            sum = sum + key.charCodeAt(i);
        }
        return sum % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [[key, value]];
        } else {
            let chain = this.table[index];
            let sameItem = chain.find(item => item[0] === key);
            if (sameItem) {
                sameItem[1] = value;
            } else {
                chain.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        } else {
            let chain = this.table[index];
            let item = chain.find(item => item[0] === key);
            return item ? item[1] : undefined;
        }
    }

    remove(key) {
        let index = this.hash(key);
        let chain = this.table[index];
        if (chain) {
            let indexToRemove = chain.findIndex(item => item[0] === key);
            chain.splice(indexToRemove, 1);
        }
    }

    display() {
        let table = this.table;
        for (const items of table) {
            if (items && items.length) {
                for (const item of items) {
                    console.log(`${item[0]} => ${item[1]}`);
                }
            }
        }
    }
}

const myHashTable = new HashTable(15);
myHashTable.set('Shawon', 2.9);
myHashTable.set('Shwoan', 3.9);
myHashTable.set('Nipun', 2.7);
myHashTable.set('Sourav', 3.8);
myHashTable.display();