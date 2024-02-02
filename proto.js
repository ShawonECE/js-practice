function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.read = function() {
    console.log(this.name, " is reading");
}

function Developer(name, age, role, hasJob) {
    Person.call(this, name, age);  // This line is to apply Person's properties (constructor) to the Developer
    this.role = role;
    this.hasJob = hasJob;
}

Developer.prototype = Object.create(Person.prototype);  // Developer got the properties (constructor) of Person. But it needs the Person's prototype also to avail the methods that are defined in the prototype
Developer.prototype.constructor = Developer;  // Since Developer's prototype is recreated, we need to redefine the constructor inside the prototype

Developer.prototype.learn = function() {
    console.log(this.name, " is learning");
}

const shawon = new Developer('Shawon', 27, 'fullStack', true);
const nipun = new Developer('Nipun', 29, 'frontend', false);

console.dir(shawon);
shawon.read();
shawon.learn();