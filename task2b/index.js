function add(numb1, numb2) {
  // why does it reassign to a string?is it a function?
  let num1 =numb1;
  return num1 + numb2;
}

function multiply(num1, operator, num2) {
  //not returnig anything
  //operator not needed to be passed as a paramater 
  //its not doing what the function wants(muliply)
  if (operator === "*") {
    return num1 * num2
  } else {
    return "try again"
  }
  
}

function hasPets(hasPet, firstName, lastName) {
  if (hasPet === true) {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    // semi colon after return is closing the statment
    return firstName + " " + lastName +  " has no pets";
  }
}

let myAccountNumbers = {
  // should be number not string
  account1: 220,
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts() {
  // wrong placement in array 
  let firstAccount = myAccountNumbers.account2;
  // should return number not string
  let secondAccount = myAccountNumbers.account3;
  return firstAccount + secondAccount;
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    //not returning answer 
    return answer;
  }
  //should be if else 
  else if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return answer;
  }
  else if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return answer;
  }
  else if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return answer;
  } else {
    let answer = "Invalid inputs. Try again!";
    return answer;
    //return answer should be on same line 
    
  }
  
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
