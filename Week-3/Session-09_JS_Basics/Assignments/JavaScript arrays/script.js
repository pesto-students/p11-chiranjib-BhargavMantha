// Put your solution here
function divideArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw "The input is not an array";
  }
  const oddNumbers = [];
  const evenNumbers = [];
  for (let arrayIndex = 0; arrayIndex < numbers.length; arrayIndex++) {
    const eachNumber = numbers[arrayIndex];
    if (eachNumber % 2 === 0) {
      evenNumbers.push(eachNumber);
    } else {
      oddNumbers.push(eachNumber);
    }
  }

  if (evenNumbers.length === 0 && oddNumbers.length === 0) {
    console.log("None");
    return;
  }
  console.log("Even numbers");
  print(evenNumbers);
  console.log("odd numbers");
  print(oddNumbers);
}

function print(numbersToPrint) {
  numbersToPrint = numbersToPrint.sort();
  numbersToPrint.map((element) => console.log(element));
}
