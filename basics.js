// import { styleText } from "node:util";
const util = require('util');
const os = require('os');

console.log(os.platform());
console.log(os.freemem());
console.log(os.arch());



console.log(
    util.styleText(['red'], 'This is red text') + '\n' +
    util.styleText(['magentaBright','bold'], 'This is green and bold') + '\n' +
    'this is normal text'
)

// console.log(process.env.PORT)
// the below code handles incoming data stream, typically used with HTTP server to capture the body of a request.
/*let body = [];
request
    .on('data',chunk=>{
        body.push(chunk);
        
    })
    .on('end',()=>{
        body = Buffer.concat(body).toString();
        console.log("Finished receiving body: ",body)
    })
*/

console.log("Hello %s","Kajal");

