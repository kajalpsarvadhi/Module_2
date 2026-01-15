function sum(a,b,c){
    return a+b+c
}

function curriedSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(curriedSum(2)(5)(3));

const addTwo = curriedSum(2)

console.log(addTwo(5)(10));

