const display = document.getElementById('answer');

function buttonValueDisplay(btn){

    const btnValue = btn.value;

    switch(btnValue){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            input.value += "" + btnValue + "";
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            input.value += " " + btnValue + " "; 
            break; 
        case 'clear':
            input.value = '';
            display.innerHTML = '';
            break; 
        case 'backspace':
            input.value = input.value.substring(0, input.value.length-1); 
            break;  
        default:
            display.innerHTML = 'Syntax Error';
            break; 
    }
    
}

