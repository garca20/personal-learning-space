// console.log("Página cargada con éxito.")



var caja1 = document.getElementById("mouseEvent");
var funnySound = new Audio('../media/level_complete.mp3');
var explosionSound =  new Audio('../media/explosion.wav')
var caja1Image = "url(https://www.researchgate.net/profile/Matthew-Stephenson-4/publication/334646384/figure/fig1/AS:889560376565761@1589099129195/Screenshot-of-a-level-from-the-Angry-Birds-game.ppm)"

var explosionGif = "url(https://media.tenor.com/4MOc_udzsRQAAAAC/explosion.gif)"

var bombNormal = "url(https://www.angrybirds.com/wp-content/uploads/2022/05/ABCOM_202203_350x350_CharacterDimensio_Blues_Classic.png)"

console.log(caja1.value);

function changeBgColorOnClick() {
    caja1.style.backgroundColor = "rgb(150, 150, 150)";

    funnySound.play();

    adjustImage("mouseEvent", "850px", "435px", caja1Image)

    // caja1.style.backgroundSize = "cover";
    // caja1.style.backgroundRepeat = "no-repeat";
    // caja1.style.backgroundPosition = "center";
    // caja1.style.width = "850px";
    // caja1.style.height = "435px";

    caja1.innerHTML = "";
}

function resetBgColor() {
    caja1.style.backgroundColor = "rgb(200, 200, 200)";
    caja1.innerText = "Hola, pon el mouse aqui.";
    
    adjustImage("mouseEvent", "300px", "300px", "url()")

}

function soundAndBg(element) {

    explosionSound.play();

    adjustImage(element, "300px", "300px", explosionGif)
    // 
}

function adjustImage(element, xLenght, yLenght, urlImg) {

    const reservedElement2 = document.getElementById(element);

    reservedElement2.style.backgroundImage = urlImg;
    reservedElement2.style.backgroundSize = "cover";
    reservedElement2.style.backgroundRepeat = "no-repeat";
    reservedElement2.style.backgroundPosition = "center";
    reservedElement2.style.width = xLenght;
    reservedElement2.style.height = yLenght;

}