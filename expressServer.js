const express = require('express')
// const router = express.Router();
const app = express()
app.get('/',(req,res)=>{
    res.send('<H1>Express Server</H1>');
})

app.listen(3001,()=>{
    console.log(`Server running on port http://localhost:3001`);
    
})