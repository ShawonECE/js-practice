class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    read() {
        console.log(this.name, " is reading");
    }
}

class Developer extends Person {
    constructor(name, age, role, hasJob) {
        super(name, age);
        this.role = role;
        this.hasJob = hasJob;
    }

    learn() {
        console.log(this.name, " is learning");
    }
}

const shawon = new Developer('Shawon', 27, 'fullStack', true);
const nipun = new Developer('Nipun', 29, 'frontend', false);

console.log(nipun);