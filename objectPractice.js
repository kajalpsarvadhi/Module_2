const obj = {
    a:"Some String",
    b:23
}

for(const [key,value] of Object.entries(obj)){
    console.log(`${key}: ${value}`);
    
}


const map = new Map(Object.entries(obj))
console.log(map);


Object.entries(obj).forEach(([k,v])=>{
    console.log(`${k}:${v}`);
    
})


const entries = new Map([["foo","bar"],["baz",12]])

const obj1 = Object.fromEntries(entries)

console.log(obj1);


const arr = [["a","1"],["b","2"],["c","3"]]
const objArr = Object.fromEntries(arr)
console.log(objArr);

console.log(Object.keys(obj));
console.log(Object.values(obj))

const map1 = new Map()
console.log(map1.toString());

