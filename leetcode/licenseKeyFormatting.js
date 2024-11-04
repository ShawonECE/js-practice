const licenseKeyFormatting = (s, k) => {
    const alphaNumerics = s.split("-").join("");
    const length = alphaNumerics.length;
    let j = 0;
    let result = "";

    for (let i = length - 1; i >= 0; i--) {
        result = alphaNumerics[i].toUpperCase() + result;
        j++;

        if (j % k === 0) {
            j = 0;
            if (i !== 0) {
                result = "-" + result;
            }
        }
    }

    return result;
};