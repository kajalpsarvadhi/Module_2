const fs = require('fs')
const file = '/Users/sarvadhisolution/Documents/KajalWork/NodePractice/serverCreation.js'
fs.readFile(file,'utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
    
})