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

takeOrder('customer1');
processOrder('customer1')
.then(res => console.log(res))
.then(() => serveOrder('customer1'));

takeOrder('customer2');
processOrder('customer2')
.then(res => console.log(res))
.then(() => serveOrder('customer2'));