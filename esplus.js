const { config } = require("node:process");

//Destructuring
const user = {id:1,name:"Kajal",role:"Admin"}

const {name,role}=user
console.log(name,role);


//rest and spread

const update = {...user,active:true,dob:"12/12/2004"} //spread
const {id,...rest} = update //rest
console.log(id,rest);


const table = "tbl_emp"
const qry = `SELECT * FROM ${table}`
console.log(qry);

const role_user = update?.role //Optional chaining
console.log(role_user);

const city = update?.city
console.log(city);

const timeout = 1000
const time = config.timeout ?? 3000
console.log(time);




