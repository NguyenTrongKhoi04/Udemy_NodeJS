const fs = require('fs');

const textIn = fs.readFileSync('../../../Data_FullCourse_Udemy/1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is: ${textIn} when ${Date.now()}`;
fs.writeFileSync('../../../Data_FullCourse_Udemy/1-node-farm/starter/txt/output.txt', textOut);
console.log('File written!');
