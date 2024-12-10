const fs = require('fs');

fs.readFile('../../../Data_FullCourse_Udemy/1-node-farm/starter/txt/st1rt.txt','utf-8', (err,data1)=>{
    if(err) return console.log('Error !');
    fs.readFile(`../../../Data_FullCourse_Udemy/1-node-farm/starter/txt/${data1}.txt`,'utf-8', (err,data2)=>{
        console.log(data2);
        fs.writeFile(`../../../Data_FullCourse_Udemy/1-node-farm/starter/txt/final.txt`, `${data1}\n${data2}`, err => {
            console.log('Your file has been written !');
        });
    });
});

console.log("writing...");