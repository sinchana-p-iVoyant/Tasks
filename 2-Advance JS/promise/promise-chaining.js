// Promise Chaining:
// Write a function that uses Promises to perform the following tasks:

// Fetch data from two different URLs using fetch or any other HTTP request library.
// Parse the JSON response from each URL.
// Sum the values from the parsed JSON responses.
// Return the final sum.

// my code....

// let url1 = "https://jsonplaceholder.typicode.com/todos/1"    
// let url2 = "https://jsonplaceholder.typicode.com/todos/2"

// function promise_chaining(url1,url2){
//     let val1 = fetch(url1)
//         .then((response) => response.json())
//         .then((data) => console.log(data.id))
//         .catch((err) => console.log(err))

//     let val2 = fetch(url2)
//         .then((response) => response.json())
//         .then((data) => console.log(data.id))
//         .catch((err) => console.log(err))


//     return new Promise((resolve, reject) => {
//         console.log("Fetching data, please wait...")
//         setTimeout(() => {
//             if(val1, val2){
//                 let sum = val1 + val2
//                 console.log(val1, val2)
//                 console.log(`sum: ${sum}`)
//                 resolve(sum)
//             }else{
//                 reject("Couldn't fetch data")
//             }
//         }, 9000);
//     })
// }        

// promise_chaining(url1, url2)
//     .then((sum) => {
//         console.log(`sum: ${sum}`)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


let url1 = "https://jsonplaceholder.typicode.com/todos/1";
let url2 = "https://jsonplaceholder.typicode.com/todos/2";

// function promise_chaining(url1, url2) {
//     // Helper function to fetch and parse data
//     function fetchData(url) {
//         return fetch(url)
//             .then((response) => response.json())
//             .then((data) => data.id)
//             .catch((err) => {
//                 console.log(err);
//                 throw err; // Re-throw the error to propagate it through the promise chain
//             });
//     }

//     // Using Promise.all to fetch data from both URLs simultaneously
//     return Promise.all([fetchData(url1), fetchData(url2)])
//         .then((values) => {
//             console.log(values)
//             const sum = values.reduce((acc, val) => acc + val, 0);
//             console.log(`sum: ${sum}`);
//             return sum;
//         })
//         .catch((error) => {
//             console.log(error);
//             throw error; // Re-throw the error to propagate it to the final catch
//         });
// }


// using Arrow function:

// 
const promise_chaining = (url1, url2) => {
    const fetchData = (url) => 
        fetch(url)
            .then((response) => response.json())
            .then((data) => data.id)
            .catch((err) => {
                console.log(err);
                throw err;
            });

    return Promise.all([fetchData(url1), fetchData(url2)])
        .then((values) => {
            console.log(values);
            const sum = values.reduce((acc, val) => acc + val, 0);
            console.log(`sum: ${sum}`);
            return sum;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

// 
promise_chaining(url1, url2)
    .then((sum) => {
        console.log(`Final Sum: ${sum}`);
    })
    .catch((error) => {
        console.log(error);
    });

// junk code...

// let val1 = fetch(url1)
// .then((response) => response.json())
// .then((data) => console.log(data.id))

// let val2 = fetch(url2)
// .then((response) => response.json())
// .then((data) => console.log(data.id))



    // let sum = val1+val2    
    // console.log(sum)
    // return sum    


// let prom = new Promise((resolve, rehject) => {
//     if(val1, val2){
//         let sum = val1 + val2
//         resolve(sum)
//     }else{
//         reject("Couldn't fetch data")
//     }
// })

// console.log(promise_chaining(url1, url2))


// function promise_chaining(url){
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             // console.log(data.id)
//             resolve("success")
//             return (data.id)
//         })
//         .catch((error) => {
//             console.log(error)
//             reject("Failed")
//         })
//     })
// }


// let val1 = promise_chaining(url1)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// let val2 = promise_chaining(url2)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// console.log(val1)
// console.log(val2)

// let sum = val1 + val2    
// console.log(sum)


// Promise Chaining:
// Write a function that uses Promises to perform the following tasks:

// Fetch data from two different URLs using fetch or any other HTTP request library.
// Parse the JSON response from each URL.
// Sum the values from the parsed JSON responses.
// Return the final sum.