const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

const person2 = {
    firstName: 'Shawon',
    lastName: 'Shahriar'
};

console.log(person1.fullName.apply(person2));