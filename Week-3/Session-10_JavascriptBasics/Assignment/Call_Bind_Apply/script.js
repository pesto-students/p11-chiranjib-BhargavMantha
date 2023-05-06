// Define a Calculator class
class Calculator {
  // Add method that accepts two numbers and returns their sum
  add(number1, number2) {
    return number1 + number2;
  }

  // Subtract method that accepts two numbers and returns their difference
  subtract(number1, number2) {
    return number1 - number2;
  }

  // Multiply method that accepts two numbers and returns their product
  multiply(number1, number2) {
    return number1 * number2;
  }

  // Divide method that accepts two numbers and returns their quotient
  divide(number1, number2) {
    if (number2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return number1 / number2;
  }
}

// Define a ScientificCalculator class that extends Calculator
class ScientificCalculator extends Calculator {
  // Square method that accepts a number and returns its square
  square(number1) {
    return number1 * number1;
  }

  // Cube method that accepts a number and returns its cube
  cube(number1) {
    return number1 * number1 * number1;
  }

  /* Power method that accepts two numbers and returns the first number raised to the 
  power of the second number*/
  power(number1, number2) {
    console.log(number1, number2);
    return Math.pow(number1, number2);
  }
}

// Create an instance of the ScientificCalculator class
const scientificCalc = new ScientificCalculator();

/* Using the "call" method, invoke the "add" method of the Calculator class with 
arguments 10 and 5.*/
const sum = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log(`10+5 :${sum}`); // Output: 15

/* Using the "apply" method, invoke the "subtract" method of the Calculator class with 
arguments 10 and 5.*/
const diff = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log(`10-5 :${diff}`); // Output:5

/* Using the "bind" method, create a new method named "multiplyByTwo" that multiplies 
a number by 2 and returns the result. Bind the "multiplyByTwo" method to the instance 
of the ScientificCalculator class.*/
const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalc, 2);
scientificCalc.multiplyByTwo = multiplyByTwo;
console.log(`5x2 :${scientificCalc.multiplyByTwo(5)}`); // Output: 10

/*Using the "bind" method, create a new method named "powerOfThree" that raises a
 number to the power of 3 and returns the result. Bind the "powerOfThree" method to 
 the instance of the ScientificCalculator class.*/
const powerOfThree = ScientificCalculator.prototype.cube.bind(scientificCalc);
scientificCalc.powerOfThree = powerOfThree;
console.log(`2^3:${scientificCalc.powerOfThree(2)}`); // Output: 8
