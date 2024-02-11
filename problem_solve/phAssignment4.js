const calculateMoney = (ticketSale) => {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'Invalid number';
    }
    let remaining = ticketSale * 120 - (500 + (8 * 50));
    return remaining;
};

const checkName = (name) => {
    if (typeof name !== 'string') {
        return 'Invalid';
    }
    const preferredCharacters = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
    name = name.toLowerCase();
    const lastCharacter = name[name.length - 1];
    if (preferredCharacters.includes(lastCharacter)) {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
};

const deleteInvalids = (array) => {
    if (!Array.isArray(array)) {
        return 'invalid array';
    }
    const filteredArray = array.filter(item => typeof item === 'number' && !Number.isNaN(item));
    return filteredArray;
};

const password = (object) => {
    if (!(object.name && object.birthYear >= 1000 && object.birthYear <= 9999 && object.siteName)) {
       return 'invalid'; 
    }
    object.siteName = object.siteName[0].toUpperCase() + object.siteName.substring(1);
    let password = object.siteName + '#' + object.name + '@' + object.birthYear;
    return password;
};

const monthlySavings = (payments, cost) => {
    if (!Array.isArray(payments) || typeof cost !== 'number' || Number.isNaN(cost)) {
        return 'invalid input';
    }
    let income = 0;
    for (let payment of payments) {
        payment = payment >= 3000 ? payment * 0.8 : payment;
        income += payment;
    }
    let savings = income - cost;
    return savings >= 0 ? savings : 'earn more';
};