function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const x = 2 * 2

        if (x == 4) {
            resolve("Success");
        } else {
            reject(Error("Failed"));
        }
    })
}