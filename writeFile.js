const fs = require('fs');
const { TextEncoderStream } = require('stream/web');

const content = "trying to write to a file"
const file_name = "/Users/sarvadhisolution/Documents/KajalWork/NodePractice/new_file.txt"
fs.writeFile(file_name,content,err=>{
    if(err){
        console.error(err);
        
    }else{
        console.log("File written successfully!!");
        
    }
})