 
const add = (a,b) => a+b;
const sub = (a,b) => a-b;


// module.exports = add;
module.exports =  {
    add,
    sub
}

// module.exports.add = add
// module.exports.sub = sub

// module.exports.mul = (a,b) => a*b;

console.log(add(1,2))