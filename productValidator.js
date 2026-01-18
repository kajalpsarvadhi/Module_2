const ValidateCreateProduct = (body) =>{
    if(!body.name || body.name.trim()  === ""){
        return "Name is required!"
    }
    if(typeof body.price !== "number" || body.price <= 0){
        return "Price must be greater than 0"
    }
    if(body.stock !== undefined && body.stock < 0){
        return "Stock cannot be negative"
    }
    return null;
}

module.exports = ValidateCreateProduct