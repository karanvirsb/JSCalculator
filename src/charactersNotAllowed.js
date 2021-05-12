const inputKeyUp = document.getElementById('input');  

inputKeyUp.addEventListener('keydown', e => {
    

    const key = e;
    const keyCode = key.key;

    const regSymbol = /\d|\+|\-|\/|\*|\b/

    if(!regSymbol.test(keyCode)){
        key.preventDefault(keyCode); 
    }

});