var curry = require('./curry');

function calculate (num1) {

  // if(typeof num2 !== 'number') {

  //   return "Invalid input.";
  // }

  return function(operator) {

    // if(typeof operator !== 'string') {

    //   return "Invalid input.";
    // }

    return function(num2) {

      // if(typeof num2 !== 'number') {

      //   return "Invalid input.";
      // }

      switch(operator) {

        case "+":
        case "add":

          return num1 + num2;
          break;
        case "-":
        case "subtract":

          return num1-num2;
          break;
        case "*":
        case "multiply":

          return num1*num2;
          break;
        case "/":
        case "divide":

          return num1/num2;
          break;
        case "%":
        case "modulo":

          return num1%num2;
          break;
        case "^":
        case "power of":

          return Math.pow(num1,num2);
          break;
        default:

          return "Could not process input."
          break;
      }
    };
  };
};

function random (start) {

  return {

    to : function(end) {

      return Math.floor(Math.random()* ((end-1) - start)) + start;
    },

    toInclude: function(end) {

      return Math.floor(Math.random()* (end - start)) + start;
    }
  }

}

function concat(arg1,arg2) {

  return arg1 + "" + arg2;
}

var prependGreeting = curry(concat,'Hello ');

function add (arg1,arg2,arg3) {

  return arg1 + arg2 + arg3;
}

var add4and5 = curry(add,4,5);

function calculator(operation){

  switch(operation) {

    case "+":
    case "add":

      return function(op2, op1) {

        return op2 + op1;
      };
      break;
    case "-":
    case "subtract":

      return function(op2, op1) {

        return op1 -op2;
      };
      break;
    case "*":
    case "multiply":

      return function(op2, op1) {

        return op2 * op1;
      };
      break;
    case "/":
    case "divide":

      return function(op2, op1) {

        return op1/op2;
      };
      break;
    case "%":
    case "modulo":

      return function(op2, op1) {

        return op1%op2;
      };
      break;
    case "^":
    case "power of":

      return function(op2, op1) {

        return Math.pow(op1,op2);
      };
      break;
    default:

      return "Could not process input."
      break;
  }



}

var add5 = curry(calculator("+"),5);
var sub5 = curry(calculator("-"),5);
var multiply5 = curry(calculator("*"),5);
var divide5 = curry(calculator("/"),5);
var mod5 = curry(calculator("%"),5);
var pow3 = curry(calculator("^"),3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};