const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

let taskDeadline = "18 Feb 2026";
const dateEl = document.querySelector(".date");
dateEl.innerHTML = getCurrentDate();

function countdown(){
    const deadline = new Date(taskDeadline);
    const currentDate = new Date();

    const totalSeconds = (deadline - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

function getCurrentDate(){
    let currentDate = new Date();
    let weekDay = getDayName(currentDate.getDay());
    let day = currentDate.getDate();
    let month = getMonthName(currentDate.getMonth());
    let year = currentDate.getFullYear();

    return `${weekDay}, ${day} ${month} ${year}`;
}

function getDayName(num){
    switch(num){
        case 0: 
            return 'Sunday';
        case 1: 
            return 'Monday';
        case 2: 
            return 'Tuesday';    
        case 3: 
            return 'Wednesday';
        case 4: 
            return 'Thursday';
        case 5: 
            return 'Friday';
        case 6: 
            return 'Saturday';
    }
}

function getMonthName(num){
    switch(num){
        case 0: 
            return 'January';
        case 1: 
            return 'February';
        case 2: 
            return 'March';    
        case 3: 
            return 'April';
        case 4: 
            return 'May';
        case 5: 
            return 'June';
        case 6: 
            return 'July';
        case 7: 
            return 'August';
        case 8: 
            return 'September';
        case 9: 
            return 'October';
        case 10: 
            return 'November';
        case 11: 
            return 'December';
    }
}

countdown();

setInterval(countdown, 1000);