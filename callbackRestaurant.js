const takeOrder = (customer, callback) => {
    console.log(`Taking Order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`Processing Order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking completed for ${customer}`);
        console.log(`Processed Order for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`Completed Order for ${customer}`);
};

takeOrder('Customer1', (customer) => {
    processOrder(customer, (customer) =>{
        completeOrder(customer);
    });
});

takeOrder('Customer2', (customer) => {
    processOrder(customer, (customer) =>{
        completeOrder(customer);
    });
});
