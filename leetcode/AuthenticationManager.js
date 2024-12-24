class AuthenticationManager {
    constructor(timeToLive) {
        this.timeToLive = timeToLive;
        this.record = new Map();
    }

    generate(tokenId, currentTime) {
        this.record.set(tokenId, this.timeToLive + currentTime);
    };

    renew(tokenId, currentTime) {
        if(this.record.has(tokenId) && currentTime < this.record.get(tokenId)) {
            this.record.set(tokenId, currentTime + this.timeToLive);
        }
    }

    countUnexpiredTokens(currentTime) {
        let count = 0;

        for (const [tokenId, expiryTime] of this.record) {
            if (currentTime < expiryTime) {
                count++;
            }
        }

        return count;
    }
}

const authenticationManager = new AuthenticationManager(5); // Constructs the AuthenticationManager with timeToLive = 5 seconds.
authenticationManager.renew("aaa", 1); // No token exists with tokenId "aaa" at time 1, so nothing happens.
authenticationManager.generate("aaa", 2); // Generates a new token with tokenId "aaa" at time 2.
authenticationManager.countUnexpiredTokens(6); // The token with tokenId "aaa" is the only unexpired one at time 6, so return 1.
authenticationManager.generate("bbb", 7); // Generates a new token with tokenId "bbb" at time 7.
authenticationManager.renew("aaa", 8); // The token with tokenId "aaa" expired at time 7, and 8 >= 7, so at time 8 the renew request is ignored, and nothing happens.
authenticationManager.renew("bbb", 10); // The token with tokenId "bbb" is unexpired at time 10, so the renew request is fulfilled and now the token will expire at time 15.
authenticationManager.countUnexpiredTokens(15); // The token with tokenId "bbb" expires at time 15, and the token with tokenId "aaa" expired at time 7, so currently no token is unexpired, so return 0.