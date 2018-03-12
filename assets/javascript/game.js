// Build out basic html wireframe for game

// Declare variables
var randomNumber;
//variables for each button (jewel) 
var button1; 
var button2;
var button3;
var button4;
var total = 0;
var Wins = 0;
var Looses = 0;

// On page load a number should be generated and displayed in the first green box

// random number code here 
function randomNumberGen(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// assign random number to the random variable randomNumber
randomNumber = randomNumberGen(120, 19);

// on page load the random number is displayed on the screen
console.log(randomNumber);
$("#randomNumber").text(randomNumber);

// On page load wins and losses should be set to zero
$("#win").text(Wins);
$("#loose").text(Looses);
// On page load total score is set to zero
$("#t_score").text(total);

// A random number should be generated and assigned to each button
button1 = randomNumberGen(12,1);
button2 = randomNumberGen(12, 1);
button3 = randomNumberGen(12, 1);
button4 = randomNumberGen(12, 1);

/*console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);check whether each button generates random number in the console*/

// When a user clicks each button, the value set to that button should be added to the total
$("#button-1").click(function(){
    total = Number(total) + Number(button1);
    /*console.log("total no button1>>>>"+total);
    console.log("randon no button1>>>>" + randomNumber);*/
    $("#t_score").text("Total: " + total);
    if (total > randomNumber) {
        //console.log("i loose")
        Looses++;
        $("#loose").text(Looses);
        reset();

    }
    else if (total == randomNumber) {
        //console.log("i win")
        Wins++;
        $("#win").text(Wins);
        reset();
    }
    
   
});
//$("#t_score").text("Total: " + total);

$("#button-2").click(function () {
    total = Number(total) + Number(button2);
    /*console.log("total no button2>>>>" + total);
    console.log("randon no button2>>>>" + randomNumber);*/
    $("#t_score").text("Total: " + total);
    if (total > randomNumber) {
        //console.log("i loose")
        Looses++;
        $("#loose").text(Looses);
        reset();

    }
    else if (total == randomNumber) {
        //console.log("i win")
        Wins++;
        $("#win").text(Wins);
        reset();
    }
    
   
});
//$("#t_score").text("Total: " + total);

$("#button-3").click(function () {
    total = Number(total) + Number(button3);
    /*console.log("total no button3>>>>" + total);
    console.log("randon no button3>>>>" + randomNumber);*/
    $("#t_score").text("Total: " + total);
    if (total > randomNumber) {
        //console.log("i loose")
        Looses++;
        $("#loose").text(Looses);
        reset();

    }
    else if (total == randomNumber) {
        //console.log("i win")
        Wins++;
        $("#win").text(Wins);
        reset();
    }

});
$("#t_score").text("Total: " + total);

$("#button-4").click(function () {
    total = Number(total) + Number(button4);
    /*console.log("total no button4>>>>" + total);
    console.log("randon no button44>>>>" + randomNumber);*/
    $("#t_score").text("Total: " + total);
    if (total > randomNumber) {
        //console.log("i loose")
        Looses++;
        $("#loose").text(Looses);
        reset();

    }
    else if (total == randomNumber) {
        //console.log("i win")
        Wins++;
        $("#win").text(Wins);
        reset();
    }

});
//$("#t_score").text("Total: " + total);



// Look in to if else statements for this section
    // When the total matches the random number, wins is incremented by 1
    // When the total exceeds the random number, losses is incremented by 1


/*if (total > randomNumber) {
    //console.log("i loose")
    Looses++;
    $("#loose").text(Looses);
    reset();

}
else if (total == randomNumber) {
    //console.log("i win")
    Wins++;
    $("#win").text(Wins);
    reset();
}*/


