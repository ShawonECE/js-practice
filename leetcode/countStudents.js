const countStudents = (students, sandwiches) => {
    while (sandwiches.length && students.includes(sandwiches[0])) {
        if (sandwiches[0] === students[0]) {
            sandwiches.shift();
            students.shift();
        } else {
            students.push(students.shift());
        }
    }
    return sandwiches.length;
};

const students = [1,1,0,0], sandwiches = [0,1,0,1];
console.log(countStudents(students, sandwiches));
