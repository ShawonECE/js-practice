const paymentCompleted = false;
const marks = 85;

const enroll = (callback) => {
    console.log("Course enrollment is in progress...");

    setTimeout(() => {
        if(paymentCompleted) {
            callback();
        } else {
            console.log("Your payment failed");
        }
    }, 2000);
};

const progress = (callback) => {
    console.log("Course is in progress, try your best...");

    setTimeout(() => {
        if(marks >= 80) {
            console.log("Great job! You have passed the course");
            callback();
        } else {
            console.log("Sad! You have failed");
        }
    }, 5000);
};

const getCertificate = () => {
    console.log("Your certificate is printing, please wait a moment...");

    setTimeout(() => {
        console.log("Your certificate is ready! Please collect it");
    }, 1000);
};

enroll(() => {
    progress(getCertificate);
});