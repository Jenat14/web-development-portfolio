var randomNum1 = Math.random();
randomNum1 =Math.round((randomNum1*5)+1);
var dice1 = "Images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1)

var randomNum2 = Math.random();
randomNum2 =Math.round((randomNum2*5)+1);
var dice2 = "Images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2)

if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent="Player 1 is the Winner! 🥳";
    document.querySelector("h1").classList.add("smaller")
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").textContent="Player 2 is the Winner! 🥳";
    document.querySelector("h1").classList.add("smaller")
}
else{
    document.querySelector("h1").textContent="Its a Draw!";
    document.querySelector("h1").classList.add("smaller");
}