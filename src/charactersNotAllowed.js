const inputKeyDown = document.getElementById('input');  

inputKeyDown.addEventListener('keydown', e => {
    
    const key = e;
    const keyCode = key.key;
    console.log(keyCode);

    const regSymbol = /[0-9]|\+|\-|\/|\*/

    console.log(regSymbol.test(keyCode)); 

    if(!regSymbol.test(keyCode)){
        key.preventDefault(keyCode); 
    } 
    if(keyCode === 'Backspace'){
        input.value = input.value.substring(0, input.value.length-1); 
    }

});