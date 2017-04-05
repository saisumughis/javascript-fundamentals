function greetMe(yourName) {
  console.log('Hello ' + yourName);
}

//varibles get hoisted to the top of the function. it throws undefined and not any compile time error
function variableHoisting(x){
  console.log(x);
  var y;
  console.log(y); //undefined
  y = 10;
}

//foo(); foo is not a function. only function declarations gets hoisted and not
//the function expression

var foo = function(){
  return "foo";
}

greetMe('World');
variableHoisting(5);


//Variables
var name = "Sai";
let address;
const state = "MD";