const fs = require('fs')

const file_name = "/Users/sarvadhisolution/Documents/KajalWork/NodePractice/new_file.txt"

const file_content = "Trying to append in existing file"

fs.appendFile(file_name,file_content,err=>{
    if(err){
        console.error(err);
        
    }
    else{
        console.log("Appended Successfully!! Check file");
        
    }
})