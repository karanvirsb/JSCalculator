const equalButton = document.getElementById("btn-enter");
const input = document.getElementById("input");

equalButton.addEventListener('click', () => {
    
    const regExp = /\+|\-|\/|\*/;
    const splitAt = regExp.exec(input.value);
    let arr = input.value.split(splitAt[0]);
    const sign = splitAt[0];
    const num1 = arr[0], num2 = arr[1];
    
    var answer = "";

    switch(sign){
        case "+":
            answer = additionCalc(num1, num2)
            break;
        case "-":
            answer = subtractionCalc(num1, num2)
            break;
        case "/":
            answer = divisionCalc(num1, num2)
            break;
        case "*":
            answer = mulitplicationCalc(num1, num2)
            break;    
        default: 
            answer = "Error symbol not recognized";         
    }
    
    displayAnswer(answer);
    saveToHistory(input.value, answer);  
    input.value = ''; 
}); 


function displayAnswer(answer){
    const display = document.getElementById('answer'); 
    if(display.innerHTML !== ''){
        display.innerHTML = '';
    }
    display.innerHTML += answer; 
}

function saveToHistory(question, answer){
    const historyUL = document.getElementById('history-ul');
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const divInput = document.createElement('div');
    const divAnswer = document.createElement('div');
    const spanAnswer = document.createElement('span');

    li.className = 'history-item'; 
    btn.className = 'history-btn';
    divInput.className = 'input-history';
    divAnswer.className = 'answer-history'; 


    divInput.innerHTML = question; 
    divAnswer.innerHTML = '= ';
    spanAnswer.innerHTML = answer;
    
    divAnswer.appendChild(spanAnswer);  
    btn.appendChild(divInput);
    btn.appendChild(divAnswer);
    li.appendChild(btn);
    historyUL.appendChild(li);
}


function additionCalc(num1, num2){

    if(areRealNumbers(num1, num2) === -1){
        return 'Arithmatic Error'
    }
    
    return (parseFloat(num1) + parseFloat(num2)); 
}

function subtractionCalc(num1, num2){
    
    if(areRealNumbers(num1, num2) === -1){
        return 'Arithematic Error'
    }
    return num1 - num2
}

function mulitplicationCalc(num1, num2){
    
    if(areRealNumbers(num1, num2) === -1){
        return 'Arithematic Error'
    }
    return num1 * num2
}

function divisionCalc(num1, num2){
    
    if(areRealNumbers(num1, num2) === -1){
        return 'Arithematic Error'
    }
    
    return num1 / num2 
}

function areRealNumbers(num1, num2){
    const nums1 = parseFloat(num1);
    const nums2 = parseFloat(num2);
    
    if(Number.isNaN(nums1) || Number.isNaN(nums2)){
        return -1; 
    }
    return 1; 
}