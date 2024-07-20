document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector('.start-button');
    const endButton = document.querySelector('.end-button');  
  
  
    startButton.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
        
        const currentTime = `${hours}:${minutes}`;
        
        console.log('Start at:', currentTime);

        // You can use 'currentTime' variable here as needed (e.g., save to database, display on screen, etc.)
        // Example: alert(`Clicked at ${currentTime
    });
      endButton.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
        
        const currentTime = `${hours}:${minutes}`;
        
        console.log('End at:', currentTime);
        
   
     
    });
    
  
  
  
  
});
