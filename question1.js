function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        const filtered = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        if (filtered.length > 0) {
            resolve(filtered);
        } else {
            reject("No strings in the array");
        }
    });
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"])
    .then(result => console.log(result))
    .catch(error => console.error(error));

lowerCaseWords()
    .then(result => console.log(result))
    .catch(error => console.error(error));