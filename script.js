// letter and character variables
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "I", "H","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var character = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

var letter = ["a", "b", "c", "d", "e", "f", "g", "i", "h","J", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var randomString = '';


var allOptions = [capLetter, character, letter, number];


function Generate(){
    var charactChoice = prompt("How many characters would you like? 8 or 10?", "enter");
    var specCharChoice = prompt("Would you like special characters?","enter y or n");
    var upperChoice = prompt("Would you like uppercase letters?", "enter y or n");
    var numChoice = prompt("Would you like numbers", "enter y or n");

    if (charactChoice === "8" || charactChoice === "10" && specCharChoice === "y" && upperChoice === "y" && numChoice === "y") {


    for(var i=0;i<2;i++){
        var rCaplet = Math.floor(Math.random()*capLetter.length);
        randomString += capLetter[rCaplet];
    }
    for(var i=0;i<2;i++){
        var rnum = Math.floor(Math.random()*number.length);
        randomString += number[rnum];
    }
    for(var i=0;i<2;i++){
        var rLet = Math.floor(Math.random()*letter.length);
        randomString += letter[rLet];
    }
    for(var i=0;i<2;i++){
        var chart = Math.floor(Math.random()*character.length);
        randomString += character[chart];
    }

    // radomString = document.getElementById("results").innerHTML;
    
    console.log(randomString);
}
}

    // var randomString = document.querySelectorAll("results");
    // randomString.textContent;
    // document.getElementById("results").textContent(randomString);
    // randomString();
    

