const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector(".js-title");

    
function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerHTML = 
        `${hours < 10 ? `0${hours}` : hours}:${
            min < 10 ? `0${min}` : min}:${
            sec < 10 ? `0${sec}` : sec}`;
}

function init(){
    getTime(); 
    setInterval(getTime, 1000);
    

}

init();
