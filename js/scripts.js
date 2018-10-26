


//Business Logic

// function getBeeps(){

var zero = [0]
var two = [2]
var three = [3]
//
// //This function will take the inputted user number.

  var emptyArray = [];

  var number = parseInt("#number")

  for(var i = 0; i <= number; i++) {
    console.log(i);
    emptyArray.push(i);

  };
  // return emptyArray;
//d





//And output an array of numbers n-user number.







//User Interface
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var userInput = $("#number").val();
     var result = counter(userInput)
     $("#output").text(result);
     event.preventDefault();
  });
});
