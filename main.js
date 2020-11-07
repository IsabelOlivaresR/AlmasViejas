'use strict';

//SELECTORS
const inputMinutes = document.querySelector('.js-minutes');
const inputHours = document.querySelector('.js-hours');
const button = document.querySelector('.js-button');
const alert = document.querySelector('.js-result')
const alertMessage = document.querySelector('.js-message')



function calculateTimes (event){
    const minutes = parseInt(inputMinutes.value) || 0;
    const hours = parseInt(inputHours.value) || 0;
    console.log(hours,minutes)
    if (minutes === NaN) {
        minutes = 0;
    } else if (hours === NaN) {
        hours = 0;
    }
    const result = Math.round((hours * 3600 + minutes * 60) / 244);
    console.log(result);
    alert.classList.add("display");
    alertMessage.innerHTML = `Has escuchado la canción ${result} veces 🔁`;
    
}


//Listeners
button.addEventListener('click', calculateTimes);
