let bulbimg1=document.getElementById("bulbImage");
let catImage1=document.getElementById("catImage");
let switchStatus1=document.getElementById("switchStatus");
let onSwitch1=document.getElementById("onSwitch");
let offSwitch1=document.getElementById("offSwitch");



function switchOff(){
    bulbimg1.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage1.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus1.textContent="Switched off";
    offSwitch1.style.backgroundColor="red";
    onSwitch1.style.backgroundColor="#cbd2d9";
}

function switchOn(){
    bulbimg1.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage1.src =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";   
  switchStatus1.textContent="Switched on";
  offSwitch1.style.backgroundColor="#cbd2d9";
  onSwitch1.style.backgroundColor="green";
}