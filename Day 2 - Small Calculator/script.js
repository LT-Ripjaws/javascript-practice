document.addEventListener('DOMContentLoaded', function() {
    //our inputs
    const firstNumInput = document.getElementById("num1");
    const secondNumInput = document.getElementById("num2");

    //our buttons
    const addBtn = document.getElementById("add");
    const subtractBtn = document.getElementById("subtract");
    const multiplyBtn = document.getElementById("multiply");
    const divideBtn = document.getElementById("divide");

    //the span showing the result
    const resultSpan = document.getElementById("result");

    //a function containing switch-case to tell us which operation to do 
    function calculate(operation){
        let firstNum = parseFloat(firstNumInput.value);
        let secondNum = parseFloat(secondNumInput.value);

        if(isNaN(firstNum) || isNaN(secondNum))
        {
            resultSpan.textContent = "Please enter valid numbers!";
            return;
        }

        switch(operation){
            case 'add': 
                resultSpan.textContent = add(firstNum,secondNum);
                break;
            case 'subtract': 
                resultSpan.textContent = subtract(firstNum,secondNum);
                break;
            case 'multiply': 
                resultSpan.textContent = multiply(firstNum,secondNum);
                break;
            case 'divide': 
                resultSpan.textContent = divide(firstNum,secondNum);
                break;
            default:
                resultSpan.textContent = "0";
        }

    }

    // event listeners to check for the click.
    addBtn.addEventListener('click', () => calculate('add'));
    subtractBtn.addEventListener('click', () => calculate('subtract'));
    multiplyBtn.addEventListener('click', () => calculate('multiply'));
    divideBtn.addEventListener('click', () => calculate('divide'));
})


// operation functions
function add(a,b){
return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a,b){

    if (b == 0)
    {
        return "You cannot divide by 0, foo'";
    }
    
    return a/b;
};

