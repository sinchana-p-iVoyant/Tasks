// // Promise Race:
// // Write a function that takes an array of promises 
// // and returns a new promise that resolves or rejects 
// // as soon as the first promise in the array resolves or rejects.

// Promise Race:
// Write a function that takes an array of promises 
// and returns a new promise that resolves or rejects 
// as soon as the first promise in the array resolves or rejects.

let a = true;

let prom1 = new Promise((resolve, reject) => {
    if (a) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

let prom2 = new Promise((resolve, reject) => {
    if (a) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

let prom3 = new Promise((resolve, reject) => {
    if (a) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

function promises_array(promises) { 
    return new Promise((resolve, reject) => {
        // Use Promise.race to resolve or reject as soon as the first promise resolves or rejects
        Promise.race(promises)
            .then((result) => {
                console.log("First Promise has been Resolved");
                resolve(result);
            })
            .catch((error) => {
                console.log("First Promise has been Rejected");
                reject(error);
            });
    });
} 

promises_array([prom1, prom2, prom3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));



// my code:
// // Example:
// let a = false;

// let prom1 = new Promise((resolve, reject) => {
//     if(a){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     if(a){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }
// })


// let prom3 = new Promise((resolve, reject) => {
//     if(a){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }
// })

// function promises_array([prom1,prom2,prom3]){
//         return Promise.all([prom1,prom2,prom3])
//             .then((results) => {
//                 for(var i in results){
//                     console.log(results[i])
//                     if(results[i]){
//                         console.log("First Promise has been Resolved")
//                         resolve("First Promise has been Resolved")
//                     }
//                     else{
//                         console.log("First Promise has been Rejected")
//                         reject("First Promise has been Rejected")
//                     }
//                 }
//             })       
// }

// promises_array([prom1, prom2, prom3])
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))
