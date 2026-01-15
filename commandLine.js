console.log("All arguments: ",process.argv);
const name = process.argv[2] || 'No argument passed on cmd line'
const age = process.argv[3] || 'No argument passed on cmd line'
const arg0 = process.argv[0]
const arg1 = process.argv[1]
console.log(`Name : ${name} | Age : ${age}`);
console.log(`arg[0] : ${arg0} `)
console.log(`arg[1] : ${arg1}`);


