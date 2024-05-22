const numUniqueEmails = (emails) => {
    const table = new Set();
    for (const email of emails) {
        const split = email.split("@");
        const withOutPlus = split[0].split("+")[0];
        const withOutDot = withOutPlus.split(".");
        const newEmail = withOutDot.reduce((a, b) => a + b, "") + "@" + split[1];
        table.add(newEmail);
    }
    return table.size;
};

const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
console.log(numUniqueEmails(emails));;