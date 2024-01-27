const paymentCompleted = true;
const marks = 90;

const enroll = () => {
    console.log("Course enrollment is in progress...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(paymentCompleted) {
                resolve("Payment Completed");
            } else {
                reject("Your payment failed");
            }
        }, 2000);
    });

    return promise;
};

const progress = () => {
    console.log("Course is in progress, try your best...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(marks >= 80) {
                resolve("Great job! You have passed the course");
            } else {
                reject("Sad! You have failed");
            }
        }, 5000);
    });

    return promise;    
};

const getCertificate = () => {
    console.log("Your certificate is printing, please wait a moment...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your certificate is ready! Please collect it");
        }, 1000);
    });

    return promise;
};

enroll()
.then(res => console.log(res))
.then(() => progress())
.then(res => console.log(res))
.then(() => getCertificate())
.then(res => console.log(res))
.catch(err => console.error(err));
