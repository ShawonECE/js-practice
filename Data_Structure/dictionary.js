class Dictionary {
    constructor() {
        this.dictionary = {};
    }

    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
        return this.dictionary[key];
    }
}

const students = new Dictionary();
students.add('170925', 'Shawon');
students.add('170939', 'Nipun');

// students.add('name', 'Shawon');
// students.add('age', 26);

// console.log(students.get(170925));

console.log(students.dictionary.id);
