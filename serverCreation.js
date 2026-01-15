const http = require('http')

http.createServer((req,resp)=>{
    resp.write('First Node Server!!');
    resp.end()
}).listen(3001)