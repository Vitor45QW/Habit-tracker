document.addEventListener("DOMContentLoaded", () => {
  
    let startTime, endTime;
    
    let doneCounter = document.querySelector(".done-counter");
    let unfinishedCounter = document.querySelector('.unfinished-counter');
    let notDone = document.querySelector('.not-done-counter');

    const startButton = document.querySelector('.start-button');
    const endButton = document.querySelector('.end-button');  
  
const unfinishedButton = document.querySelector('.unfinished');
  
  const notDoneButton = document.querySelector('.not-done');
  
    startButton.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
        
        startTime = `${hours}:${minutes}`;
        
        console.log('Start at:', startTime);

       const field = document.querySelector('.check-negative');
            field.style.backgroundColor = 'blue';
            field.style.borderColor = 'blue';
    });
         
      endButton.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
        
       endTime = `${hours}:${minutes}`;
        
        console.log('End at:', endTime);
        
            
        
           console.log(`you started at ${startTime} and finished at ${endTime}`);
     
        doneCounter.textContent = '1 terminado';
        
         const field = document.querySelector('.check-negative');  field.style.backgroundColor = 'green';
            field.style.borderColor = 'green';
        
          
    });
    
    
  unfinishedButton.addEventListener('click', () => {
                                    console.log('unfinished clicked');                                   
  
      const field = document.querySelector('.check-negative');  field.style.backgroundColor = 'orange';
            field.style.borderColor = 'orange';
        
    
  })
  

  notDoneButton.addEventListener('click', () => {
                                    console.log('not done clicked');
    const field = document.querySelector('.check-negative');  field.style.backgroundColor = 'darkred';
            field.style.borderColor = 'darkred';
        
  })
  
  
});
