var randomNum1 = Math.random();
randomNum1 =Math.round((randomNum1*5)+1);
var dice1 = "images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1)

var randomNum2 = Math.random();
randomNum2 =Math.round((randomNum2*5)+1);
var dice2 = "images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2)

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="Player 1 is the Winner! 🥳";
    document.querySelector("h1").classList.add("smaller")
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML="Player 2 is the Winner! 🥳";
    document.querySelector("h1").classList.add("smaller")
}
else{
    document.querySelector("h1").innerHTML="Its a Draw!";
    document.querySelector("h1").classList.add("smaller");
}