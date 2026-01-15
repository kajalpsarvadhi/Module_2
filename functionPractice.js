console.log(square(5));

function square(n){
    return n*n
}

function logThis() {
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
