const divide = (a,b,callback) =>{
    setTimeout(()=>{
        if(b==0){
            callback(new Error('Division by zero error'))
        }
        else{
            callback(null,a/b)
        }
    },1000)
}

divide(10,2,(err,res)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Result is: ",res);
        
    }
})


divide(5,0,(err,res)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Result is: ",res);
        
    }
})

console.log("Synchronous code");
