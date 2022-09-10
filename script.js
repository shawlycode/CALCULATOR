const displayResult = document.querySelector(".result-output");
const displayHistory = document.querySelector(".history-output");
const tempResult = document.querySelector(".temporary-result");
const numbersBtn = document.querySelectorAll(".number");
const operatorsBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal-btn");
const clearAllBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");

//declare global variable to store numbers
let disNum1 = "";
let disNum2 = "";
let lastOperation = "";
let result = null;
let dot = false;

// numbers function
numbersBtn.forEach((number) => {
  number.addEventListener("click", (e) => {
    //dotBtn logic to prevent it been repeated twice
    if (e.target.innerText === "." && !dot) {
      dot = true;
    } else if (e.target.innerText === "." && dot) {
      return;
    }
    disNum2 += e.target.innerText;
    displayResult.innerText = disNum2;
  });
});

//operators function
operatorsBtn.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!disNum2) result;
    dot = false;
    const operatorName = e.target.innerText;
    if (disNum1 && disNum2 && lastOperation) {
      operatorFunc();
    } else {
      result = parseFloat(disNum2);
    }
    console.log(result);
    clearNum(operatorName);
    lastOperation = operatorName;
  });
});
function clearNum(operatorSelected = "") {
  disNum1 += disNum2 + " " + operatorSelected + " ";
  displayHistory.innerText = disNum1;
  displayResult.innerText = "";
  disNum2 = "";
  tempResult.innerText = result;
}
//operators math function
function operatorFunc() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(disNum2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(disNum2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(disNum2);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(disNum2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(disNum2);
  }
}
//equal btn function
equalBtn.addEventListener("click", (e) => {
  if (!disNum1 || !disNum2) return;
  dot = false;
  operatorFunc();
  clearNum();
  displayResult.innerText = result;
  tempResult.innerText = "";
  disNum1 = "";
  disNum2 = result;
});
//clear all function

clearAllBtn.addEventListener("click", (e) => {
  displayResult.innerText = 0;
  displayHistory.innerText = "";
  tempResult.innerText = "";
  disNum1 = "";
  disNum2 = "";
  result = "";
});

//delete btn function
deleteBtn.addEventListener("click", (e) => {
  displayResult.innerText = result.splice(0, -1);
});
