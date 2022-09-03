// checking something
const timer = function(){
    let date = new Date("october 11,2022 00:00:00");
    let now = new Date().getTime();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let gap = date - now;

    let printHours = document.querySelector(".hour");
    let printMinutes = document.querySelector(".minute");
    let printSeconds = document.querySelector(".second");
    
    printHours.textContent = hour;
    printMinutes.textContent = minute;
    printSeconds.textContent = seconds;
}

setInterval(timer,1000);