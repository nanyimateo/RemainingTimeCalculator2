/* 
For substracting time
Convert both dates to a common unit:
Find the difference:
Break down the difference:
Remaining hours,etc.
*/

/*
Notes to improve:

1. Input validation in the date input
2. Error handling when clicking the submit button - include popups
3. Encapsulate the DOM manipulation (display content) in a separate function


*/

let targetDateSubmitBtn = document.getElementById("target-date-btn")

let userDateInput = document.getElementById("target-date-input")
 

function countdown() {
    /*Get target date details */
    
    let userDateInputValue = userDateInput.valueAsNumber;

    /* Get dates */
    
    let now = new Date()
    
    let targetDate = new Date(userDateInputValue)
    
    /*Convert dates to a common unit*/
    
    let targetDateCommonUnit = targetDate.getTime()
    let nowCommonUnit = now.getTime()
    let remainingTimeCommonUnit = (targetDateCommonUnit - nowCommonUnit)
    
    
    /*Convert date to readable human things */
    
    let remainingDays = Math.floor(remainingTimeCommonUnit / 86400000)
    
    let remainingHours = Math.floor(remainingTimeCommonUnit / 3600000)
    
    let remainingMinutes = Math.floor(remainingTimeCommonUnit / 60000)
    
    let remainingSeconds = Math.floor(remainingTimeCommonUnit / 1000)
    
    
    /* Using a modulo approach so that hours, minutes etc. account for the days started so it is a more
    standard countoud X days and X hours and X minutes left*/
    
    remainingHours %= 24
    
    remainingSeconds %= 60
    
    remainingMinutes %= 60
    
    
    /* Display on page */
    
    let daysEl = document.getElementById("days")
    let hoursEl = document.getElementById("hours")
    let minutesEl = document.getElementById("minutes")
    let secondsEl = document.getElementById("seconds")
    
    daysEl.textContent = " " + remainingDays
    hoursEl.textContent = " " +remainingHours
    minutesEl.textContent = " " + remainingMinutes
    secondsEl.textContent = " " + remainingSeconds
    
    setTimeout(countdown, 1000)
    
    }
    
    
    

/* Event listener to gather target date inputs in real time*/



targetDateSubmitBtn.addEventListener("click", countdown)








