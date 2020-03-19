alert("Welcome to the dicee game!");

// Declare global variables
var randomNumber1 = 0;
var randomNumber2 = 0;

//Lower level function to set specific image based on random and # of die facets
function setImage(imgNum, dieNum) {
  if (imgNum===1){
    randomNumber1 = Math.floor((Math.random()*6))+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  } else if (imgNum===2){
    randomNumber2 = Math.floor((Math.random()*6))+1;
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
  }
}

//Higher level function to set all images;
function setImages(dieNum) {
  setImage(1, dieNum);
  setImage(2, dieNum);
}

//Display winner on screen after roll
function getWinner(){
  if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
  } else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
  } else if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Error 404: Try again.";
  }
}

setImages(6);
getWinner();
