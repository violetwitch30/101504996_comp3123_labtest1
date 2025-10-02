function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Delayed Success!" });
        },
            500);
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "Delayed Exception!" });
        },
            500);
    });
}

resolvedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

rejectedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));