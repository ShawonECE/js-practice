const gcd = (a, b) => {
    while (b !== 0) {
        let remainder = a % b; // Find the remainder when 'a' is divided by 'b'
        a = b;                // Update 'a' to the current 'b'
        b = remainder;        // Update 'b' to the remainder
    }
    return a; // The GCD is the last non-zero value of 'a'
}