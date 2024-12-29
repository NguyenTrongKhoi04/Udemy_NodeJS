const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
// Example 1
// setTimeout(() => console.log('timer 1 finished'), 0);
// setImmediate(() => console.log('immediate 1 finished'));
// fs.readFile("../test-file.txt", () => {
//     console.log("I/O finished");
// });
// console.log("Hello from the top-level code");

// Example 2
// setTimeout(() => console.log('timer 1 finished'), 0);
// setImmediate(() => console.log('immediate 1 finished'));
// fs.readFile("../test-file.txt", () => {
//     console.log("I/O finished");
//     setTimeout(() => console.log('timer 2 finished'), 0);
//     setTimeout(() => console.log('timer 3 finished'), 3000);
//     setImmediate(() => console.log('immediate 1 finished'));
// });
// console.log("Hello from the top-level code");

// Example 3
// setTimeout(() => console.log('timer 1 finished'), 0);
// setImmediate(() => console.log('immediate 1 finished'));
// fs.readFile("../test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("------------------");

//     setTimeout(() => console.log('timer 2 finished'), 0);
//     setTimeout(() => console.log('timer 3 finished'), 3000);
//     setImmediate(() => console.log('immediate 1 finished'));
//     process.nextTick(() => console.log('Process.nextTick finished'));
// });
// console.log("Hello from the top-level code");

// Example 4
// setTimeout(() => console.log('timer 1 finished'), 0);
// setImmediate(() => console.log('immediate 1 finished'));
// fs.readFile("../test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("------------------");

//     setTimeout(() => console.log('timer 2 finished'), 0);
//     setTimeout(() => console.log('timer 3 finished'), 3000);
//     setImmediate(() => console.log('immediate 1 finished'));
//     process.nextTick(() => console.log('Process.nextTick finished'));

//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 1");
//     });
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 2");
//     });
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 3");
//     });
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 4");
//     });
// });
// console.log("Hello from the top-level code");

// Example 5
// process.env.UV_THREADPOOL_SIZE = 2; // option

// setTimeout(() => console.log('timer 1 finished'), 0);
// setImmediate(() => console.log('immediate 1 finished'));
// fs.readFile("../test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("------------------");

//     setTimeout(() => console.log('timer 2 finished'), 0);
//     setTimeout(() => console.log('timer 3 finished'), 3000);
//     setImmediate(() => console.log('immediate 1 finished'));
//     process.nextTick(() => console.log('Process.nextTick finished'));

//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 1");
//     });
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 2");
//     });
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 3");
//     });
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log(Date.now() - start, "Password 4");
//     });
// });
// console.log("Hello from the top-level code");

// Example 6
// process.env.UV_THREADPOOL_SIZE = 2; // option

// setTimeout(() => console.log('timer 1 finished'), 0);
// setImmediate(() => console.log('immediate 1 finished'));
// fs.readFile("../test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("------------------");

//     setTimeout(() => console.log('timer 2 finished'), 0);
//     setTimeout(() => console.log('timer 3 finished'), 3000);
//     setImmediate(() => console.log('immediate 1 finished'));
//     process.nextTick(() => console.log('Process.nextTick finished'));

//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
//     console.log(Date.now() - start, "Password 1");

//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
//     console.log(Date.now() - start, "Password 2");

//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
//     console.log(Date.now() - start, "Password 3");

//     crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
//     console.log(Date.now() - start, "Password 4");
// });
// console.log("Hello from the top-level code");