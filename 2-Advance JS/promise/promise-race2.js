function promisesRace(promises) {
    return new Promise((resolve, reject) => {
        // Use Promise.race to resolve or reject as soon as the first promise resolves or rejects
        Promise.race(promises)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Example usage:
let a = false;

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a) {
            resolve("Prom1 Success");
        } else {
            reject("Prom1 Failed");
        }
    }, 2000);
});

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a) {
            resolve("Prom2 Success");
        } else {
            reject("Prom2 Failed");
        }
    }, 1000);
});

let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a) {
            resolve("Prom3 Success");
        } else {
            reject("Prom3 Failed");
        }
    }, 3000);
});

promisesRace([prom1, prom2, prom3])
    .then((result) => console.log("Resolved:", result))
    .catch((error) => console.log("Rejected:", error));
