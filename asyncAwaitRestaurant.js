const takeOrder = (customer) => {
    console.log(`Taking Order for ${customer}`);
    console.log(`Order taken for ${customer}`);
};

const processOrder = (customer) => {
    console.log(`Processing Order for ${customer}`);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Cooking completed for ${customer}`);
        }, 3000);
    });

    return promise;
};

const serveOrder = (customer) => {
    console.log(`Order served for ${customer}`);
};

async function process(customer) {
    const order = await processOrder(customer);
    console.log(order);
    serveOrder(customer);
}


takeOrder('customer1');
process('customer1');

takeOrder('customer2');
process('customer2');