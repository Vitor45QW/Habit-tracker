document.addEventListener("DOMContentLoaded", () => {
  
    let startTime, endTime;
    
    const startButton = document.querySelector('.start-button');
    const endButton = document.querySelector('.end-button');  
  
    const unfinished = document.querySelector('.unfinished');

  
          unfinished.addEventListener('click', () => {
      console.log('unfinished working');
            
            const field = document.querySelector('.check-negative');
            field.style.backgroundColor = 'orange';
    })

  
  
    startButton.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
        
        startTime = `${hours}:${minutes}`;
        
        const field = document.querySelector('.check-negative');
        field.style.backgroundColor = 'yellow';
      
        console.log('Start at:', startTime);

        // You can use 'currentTime' variable here as needed (e.g., save to database, display on screen, etc.)
        // Example: alert(`Clicked at ${currentTime
    });
         
      endButton.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
        
       endTime = `${hours}:${minutes}`;
        
        console.log('End at:', endTime);
        
            
        
           console.log(`you started at ${startTime} and finished at ${endTime}`);
    
  const checkField = document.querySelector('.check-negative');
checkField.style.backgroundColor = 'green';

    
        
    });
    

  
  
});
    

  
  
});
