function add(a, b) {
   return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 12.5

let number = 5;
icrement; //=> 6

console.log(number); //=> 5

decrement; //=> 5
console.log(number); //=> 4
decrement; //=> 4
console.log(number); //=> 3
icrement; //=> 5
console.log(number); //=> 4

number += 3; //=> 8
number -=2; //=> 6
number *= 10; //=> 50

//reset number
number = 10;

function add5(){
    return number + 5;
}

function divideBy3(){
    return number / 3;
}

divideBy3(); //=> 3.33333333333
add5(); //=> 15

//reset number
number = 10;
add5(); //=> 15
divideBy3(); //=> 3.33333333333

parseInt("4", 10); //=> 4
parseFloat("80.123999")


  console.log(add(10, 20)); // => 30

  function icrement(number){
    return number + 1;
  }
  function decrement(number){
    return number - 1;
  }
  function preserveDecimal(Number) {
    if (Number.isInteger(n)) {
        return n;
    } else {
        return parseFloat(n.toFixed(2));
    }
}