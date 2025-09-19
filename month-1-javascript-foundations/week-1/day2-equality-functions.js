console.log("--- 字符串与数字 ---");
console.log("5 == '5'  :", 5 == "5");
console.log("5 === '5' :", 5 === "5");

console.log("\n--- 布尔值与数字 ---");
console.log("0 == false  :", 0 == false);
console.log("0 === false :", 0 === false);
console.log("1 == true   :", 1 == true);
console.log("1 === true  :", 1 === true);

console.log("\n--- null 与 undefined ---");
console.log("null == undefined  :", null == undefined);
console.log("null === undefined :", null === undefined);

function square(x) 
{
    return x * x;
}

const squareArrow = (x) => x * x;

let n = 2;

console.log(square(n));
console.log(squareArrow(n));