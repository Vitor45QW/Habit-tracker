document.addEventListener("DOMContentLoaded", () => {   

    console.log("don loaded")
    const buttonDone = document.querySelector('.button-done');
    const checkNegative = document.querySelector('.check-negative')

    const buttonUndone = document.querySelector('.button-undone');

    buttonDone.addEventListener("click", () =>{
        console.log("clicked");
        checkNegative.style.backgroundColor = 'green';
    })

    buttonUndone.addEventListener("click", () => {
        checkNegative.style.backgroundColor = 'red';
    })

})