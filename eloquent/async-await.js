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
        }, 4000);
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
        }, 3000);
    });

    return promise;
};

async function course() {
    try {
        const enrollMessage = await enroll();
        console.log(enrollMessage);
        const progressMessage = await progress();
        console.log(progressMessage);
        const certificateMessage = await getCertificate();
        console.log(certificateMessage);
    } catch (error) {
        console.log(error);
    }
}

course();