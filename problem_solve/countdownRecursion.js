const countdown = (n) => {
    if (!n > 0) {
        return;
    }

    console.log(n);
    n--;
    countdown(n);
};

countdown(10);