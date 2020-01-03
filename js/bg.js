const body = document.querySelector("body");

const iMG_NUM = 5;




function paintImage(imgNum){
    const image = new Image();
    image.src = `img/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");

    body.prepend(image);

}


function getRandom(){
    const num = Math.floor(Math.random() * iMG_NUM);
    return num;
}
function init(){
    const randomNum = getRandom();
    paintImage(randomNum);
}

init();