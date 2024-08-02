document.addEventListener("DOMContentLoaded", () => {
    let dayValue = document.getElementById('day-week-value');
    let dayNumberValue = document.getElementById('day-number-value');
   const seg = document.getElementById('seg');
   const ter =   document.getElementById('ter');
   const qua =  document.getElementById('qua');
   const qui =  document.getElementById('qui');
   const sex =  document.getElementById('sex');
   const sab =   document.getElementById('sab');
   const dom =  document.getElementById('dom');

   

   const segCheck = document.querySelector('.seg-check');
   const terCheck = document.querySelector('.ter-check');
   const quaCheck = document.querySelector('.qua-check');
   const quiCheck = document.querySelector('.qui-check');
   const sexCheck = document.querySelector('.sex-check');
   const sabCheck = document.querySelector('.sab-check');
   const domCheck = document.querySelector('.dom-check');



   const startButton = document.getElementById('start-button');
   const endButton = document.getElementById('end-button')
   const unfinishedButton = document.getElementById('unfinished')
   const notDoneButton = document.getElementById('not-done');


   function collectTimeAndDate(buttonName) {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    console.log(`${buttonName} button was clicked on ${day}/${month}/${year} at ${hours}:${minutes}`);
}






   startButton.addEventListener("click", () => {
    
    dayValueRaw = dayValue.value;
    collectTimeAndDate('Start')
    


    if (dayValueRaw === 'seg') {
        segCheck.style.backgroundColor = 'blue';

    }
    
    else if (dayValueRaw === 'ter') {
        terCheck.style.backgroundColor = 'blue';
    }

    else if (dayValueRaw === 'qua') {
        quaCheck.style.backgroundColor = 'blue';
    }

    else if (dayValueRaw === 'qui') {
        quiCheck.style.backgroundColor = 'blue';
    }

    else if (dayValueRaw === 'sex') {
        sexCheck.style.backgroundColor = 'blue';
    }

    else if (dayValueRaw === 'sab') {
        sabCheck.style.backgroundColor = 'blue';
    }

    else if (dayValueRaw === 'dom') {
        sabCheck.style.backgroundColor = 'blue';
    }

    else {
        alert('not valid');
    } 


   }) // end of start listener

   endButton.addEventListener("click", () => {
    
    dayValueRaw = dayValue.value;
    collectTimeAndDate('end')

    if (dayValueRaw === 'seg') {
        segCheck.style.backgroundColor = 'blue';
    }
    
    if (dayValueRaw === 'seg') {
        segCheck.style.backgroundColor = 'green';
    }
    
    else if (dayValueRaw === 'ter') {
        terCheck.style.backgroundColor = 'green';
    }
    
    else if (dayValueRaw === 'qua') {
        quaCheck.style.backgroundColor = 'green';
    }
    
    else if (dayValueRaw === 'qui') {
        quiCheck.style.backgroundColor = 'green';
    }
    
    else if (dayValueRaw === 'sex') {
        sexCheck.style.backgroundColor = 'green';
    }
    
    else if (dayValueRaw === 'sab') {
        sabCheck.style.backgroundColor = 'green';
    }
    
    else if (dayValueRaw === 'dom') {
        sabCheck.style.backgroundColor = 'green';
    }
    

   }) // end of end listener


   unfinishedButton.addEventListener("click", () => {
    
    dayValueRaw = dayValue.value;
    collectTimeAndDate('unfinished')

    if (dayValueRaw === 'seg') {
        segCheck.style.backgroundColor = 'yellow';
    }
    
    else if (dayValueRaw === 'ter') {
        terCheck.style.backgroundColor = 'yellow';
    }
    
    else if (dayValueRaw === 'qua') {
        quaCheck.style.backgroundColor = 'yellow';
    }
    
    else if (dayValueRaw === 'qui') {
        quiCheck.style.backgroundColor = 'yellow';
    }
    
    else if (dayValueRaw === 'sex') {
        sexCheck.style.backgroundColor = 'yellow';
    }
    
    else if (dayValueRaw === 'sab') {
        sabCheck.style.backgroundColor = 'yellow';
    }
    
    else if (dayValueRaw === 'dom') {
        sabCheck.style.backgroundColor = 'yellow';
    }
    
    else {
        alert('not valid');
    }


   }) // end of unfinished listener

   notDoneButton.addEventListener("click", () => {
    
    dayValueRaw = dayValue.value;

    if (dayValueRaw === 'seg') {
        segCheck.style.backgroundColor = 'red';
    }
    
    else if (dayValueRaw === 'ter') {
        terCheck.style.backgroundColor = 'red';
    }
    
    else if (dayValueRaw === 'qua') {
        quaCheck.style.backgroundColor = 'red';
    }
    
    else if (dayValueRaw === 'qui') {
        quiCheck.style.backgroundColor = 'red';
    }
    
    else if (dayValueRaw === 'sex') {
        sexCheck.style.backgroundColor = 'red';
    }
    
    else if (dayValueRaw === 'sab') {
        sabCheck.style.backgroundColor = 'red';
    }
    
    else if (dayValueRaw === 'dom') {
        sabCheck.style.backgroundColor = 'red';
    }
    

   }) // end of not done listener



})
