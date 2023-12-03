// Promise Timeout:
// Create a function that takes a promise and a timeout value. 
// The function should return a new promise that rejects with a timeout error,
// if the original promise does not resolve or reject within the specified timeout.

// Example usage with fetch

const url = "https://jsonplaceholder.typicode.com/todos/3";

const originalPromise = fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data) {
            return data;
        }
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });

function promiseWithTimeout(originalPromise, timeout) {
    return new Promise((resolve, reject) => {
        // Set a timeout to reject the promise if it takes too long
        const timeoutId = setTimeout(() => {
            reject(new Error("Promise timed out"));
        }, timeout);

        // Execute the original promise
        originalPromise
            .then((result) => {
                // Clear the timeout if the original promise resolves before the timeout
                clearTimeout(timeoutId);
                resolve(result);
            })
            .catch((err) => {
                // Clear the timeout if the original promise rejects before the timeout
                clearTimeout(timeoutId);
                reject(err);
            });
    });
}
    

promiseWithTimeout(originalPromise, 5000)
    .then((data) => console.log('Data:', data))
    .catch((error) => console.error('Error:', error));



// my code

// var url = "https://jsonplaceholder.typicode.com/todos/3"    

// let prom1 = new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data.id)
//                 if(data){
//                     resolve(data)
//                 }
//             })
//             .catch((err) => {
//                 console.log(err)
//                 reject(err)
//             })
// })



// function promiseWithTimeout(org_promise, timeout) {
//     // Your code here
//     setTimeout(() => {
//         org_promise.then((result) => console.log(result))
//              .catch((err) => console.log(err))
//     }, timeout)
// }


// promiseWithTimeout(prom1, 5000)
//     .then(data => console.log('Data:', data))
//     .catch(error => console.error('Error:', error));
