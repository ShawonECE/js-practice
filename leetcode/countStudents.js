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

// const countStudents = (students, sandwiches) => {
//     let studentsTop = 0;
//     let sandwichesTop = 0;
//     while (students.includes(sandwiches[sandwichesTop])) {
//         if (students[studentsTop] === 'e') {
//             studentsTop === students.length - 1 ? studentsTop = 0 : studentsTop++;
//         }
//         if (sandwiches[sandwichesTop] === students[studentsTop]) {
//             sandwichesTop++;
//             students[studentsTop] = 'e';
//             studentsTop === students.length - 1 ? studentsTop = 0 : studentsTop++; 
//         } else {
//             studentsTop === students.length - 1 ? studentsTop = 0 : studentsTop++;
//         }
//     }
//     return sandwiches.length - sandwichesTop;
// };

const students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1];
console.log(countStudents(students, sandwiches));
