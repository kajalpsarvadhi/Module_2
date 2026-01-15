

const myPromise = new Promise((resolve,reject)=>{
    const success = false
    if(success){
        resolve("Operation successful")
    }
    else{
        reject("Something went wrong")
    }
})

myPromise
    .then(result=>{
        console.log(result);
        
    })
    .catch(error=>{
        console.error(error);
        
    })
    .finally(()=>{
        console.log('The promise is completed');
        
    })