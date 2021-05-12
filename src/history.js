const closeHistory = document.getElementById('close-history'); 
const history = document.getElementById('history');
const historyDiv = document.getElementById('history-btn-div');
const historyButton = document.getElementById('history-btn'); 

document.addEventListener('click', e => {
    if(e.target.matches('button.history-btn')){ 
        const historyBtn = e.target; 
        const historyListChildren = historyBtn.children;  
        const inputDiv = historyListChildren[0];
        const answerDiv = historyListChildren[1];
        const answerSpan = answerDiv.children[0]; 

        input.value = inputDiv.innerHTML;
        displayAnswer(answerSpan.innerHTML);
    }
});

closeHistory.addEventListener('click', ()=>{
   history.className = 'closed'; 
   historyDiv.classList.remove('closed'); 
});

historyButton.addEventListener('click', ()=>{
    historyDiv.className = 'closed';
    history.classList.remove('closed');
})