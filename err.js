const num = 1;

try {
    if (num < 7) {
        console.log('Number is ok');
    } else {
        throw 'Invalid number';
    }
} catch (error) {
    console.log(error);
} finally {
    console.log(`Your input was ${num}`);
}