const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const endResult = document.querySelector('.end-result');
const result = document.querySelector('.result');
const first = document.querySelector('.first');
const second = document.querySelector('.second');

let firstNum="";
let secondNum="";
let eresult="";
let operator;


const addNumber = (number) => {
  if(operator) {
    secondNum += number;
    second.innerHTML = secondNum;
  } else {
  firstNum += number;
  second.innerHTML = firstNum;
}
}

const addOperator = (text) => {
  if(operator) {
    return;
  }
  operator = text
  second.innerHTML = "";
  first.innerHTML = firstNum;
  first.innerHTML += operator;
 
}

const showResult = () => {
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);

  switch(operator) {
    case '+': 
    eresult = firstNum + secondNum;
    break;

    case '-':
    eresult = firstNum - secondNum;
    break;
    
    case '*':
    eresult = firstNum * secondNum;
    break;
    
    case '/':
    eresult = firstNum / secondNum;
    break;
  }
  second.innerHTML = eresult;
  first.innerHTML = "";
  firstNum="";
  secondNum="";
  operator = "";
}


numbers.forEach(number => {
  number.addEventListener('click', (e)=>{
    addNumber(e.target.innerText)



  })
})

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    addOperator(e.target.innerText)
    
  })
})

result.addEventListener('click', showResult)