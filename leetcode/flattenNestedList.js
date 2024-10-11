class NestedIterator {
    constructor(nestedList) {
		this.nestedList = nestedList;
        this.current = -1;
        //this.flattedList = JSON.stringify(this.nestedList).split(/[\[\],]/).filter(res => res !== '');
        this.flattedList = this.nestedList.flatMap(x => x);
    }
    hasNext() {
        this.current++;
		if (this.flattedList[this.current]) {
            return true;
        } else {
            return false;
        }
    }
	next() {
		return this.flattedList[this.current];
    }
}

const nestedList = [[1,1],2,[1,1]];
const i = new NestedIterator(nestedList);
const a = [];
while (i.hasNext()) {
    a.push(i.next());
}
for (const i of a) {
    console.log(typeof i);
}
console.log(a);