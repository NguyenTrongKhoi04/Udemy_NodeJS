const fs = require('fs');

fs.readFile('../../../Data_FullCourse_Udemy/1-node-farm/starter/txt/input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log("reading file ...");