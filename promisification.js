const fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)

async function loadFileContent(filepath){
    try{
        const data = await readFileAsync(filepath,'utf8')
        console.log(data);
        
    }catch(err){
        console.error("Failed to read file: ",err)
    }
}
const filepath = "/Users/sarvadhisolution/Documents/KajalWork/NodePractice/new_file.txt"
loadFileContent(filepath)