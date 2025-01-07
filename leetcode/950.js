const deckRevealedIncreasing = (deck) => {
    deck.sort((a, b) => b - a);
    const shuffled = new Array(deck.length);
    let lastFilled;

    for (let i = 0; i < shuffled.length; i += 2) {
        shuffled[i] = deck.pop();
        lastFilled = i;
    }

    let skipped = 0;
    let i = lastFilled + 1;

    while(deck.length) {
        if (i >= shuffled.length) {
            i = i % shuffled.length;
        }

        if (!shuffled[i]) {
            if (skipped === 0) {
                skipped++;
            } else {
                shuffled[i] = deck.pop();
                skipped = 0;
            }
        }
        i++;
    }

    return shuffled;
};

const deck = [1, 1000];
console.log(deckRevealedIncreasing(deck));