const timeRequiredToBuy = (tickets, k) => {
    let ticketSold = 0;
    let current = 0;
    while (tickets[k] !== 0) {
        if (tickets[current] > 0) {
            tickets[current]--;
            ticketSold++;
        }
        current === tickets.length - 1 ? current = 0 : current = current + 1;
    }
    return ticketSold;
};

// const timeRequiredToBuy = (tickets, k) => {
//     let ticketSold = 0;
//     while (tickets[k] !== 0) {
//         if (tickets[0] > 0) {
//             tickets[0]--;
//             ticketSold++;
//         }
//         tickets.push(tickets.shift());
//         k === 0 ? k = tickets.length - 1 : k = k - 1;
//     }
//     return ticketSold;
// };

const tickets = [5,1,1,1], k = 0;
console.log(timeRequiredToBuy(tickets, k));
