// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//         this.auth = false;
//     };
//     logIn() {
//         console.log(this.email, 'just logged in');
//         this.auth = true;
//         return this;
//     };
//     logOut() {
//         console.log(this.email, 'just logged out');
//         this.auth = false;
//         return this;
//     };
//     updateScore() {
//         this.score ++;
//         console.log(`Current score is ${this.score}`);
//         return this;
//     }
// };



// function User(name, email) {
//     this.name = name;
//     this.email = email;
//     this.score = 0;
//     this.auth = false;

//     this.logIn = function() {
//         console.log(this.email, 'just logged in');
//         this.auth = true;
//         return this;
//     };
//     this.logOut = function() {
//         console.log(this.email, 'just logged out');
//         this.auth = false;
//         return this;
//     };
//     this.updateScore = function() {
//         this.score ++;
//         console.log(`Current score is ${this.score}`);
//         return this;
//     }
// }



function User(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
    this.auth = false;
}

User.prototype.logIn = function() {
    console.log(this.email, 'just logged in');
    this.auth = true;
    return this;
};

User.prototype.logOut = function() {
    console.log(this.email, 'just logged out');
    this.auth = false;
    return this;
};

User.prototype.updateScore = function() {
    this.score ++;
    console.log(`Current score is ${this.score}`);
    return this;
}

const user1 = new User('shawon', 'send2shawon@gmail.com');
const user2 = new User('shoaib', 'shoaib@gmail.com');

// user1.logIn().updateScore();
// console.log(user1);
console.log(Object.getPrototypeOf(user1));