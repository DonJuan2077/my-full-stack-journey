console.log("5 == '5'  :", 5 == "5"); // print true
console.log("5 === '5' :", 5 === "5"); // print false


function square(x) 
{
    return x * x;
}

const squareArrow = (x) => x * x;
const squareArrow2 = (x) => 
{
    return x * x;
}

let n = 2;

console.log(square(n));
console.log(squareArrow(n));
console.log(squareArrow2(n));