# week-4-game.github.io//pseudocode
// Build out basic html wireframe for game

// Declare variables
//    var randomNumber
//    variables for each button (jewel)
//      var button1 = $('#button1').val();
//      var button2 = $('#button2').val();
//      var button3 = $('#button3').val();
//      var button4 = $('#button4').val();
//    var total
//    var wins
//    var losses

// On page load a number should be generated and displayed in the first green box

function randomNum() {
  // random number code here
  // assign random number to the random variable
  randomNumber = math.random();
  $('#someId').text(randomNumber)
};

randomNum();

// On page load wins and losses should be set to zero

// On page load total score is set to zero

// A random number should be generated and assigned to each button

// When a user clicks each button, the value set to that button should be added to the total

// Look in to if else statements for this section
//    When the total matches the random number, wins is incremented by 1
//    When the total exceeds the random number, losses is incremented by 1
