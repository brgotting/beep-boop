


//Business Logic
function getArrayOfNumbersFromZeroToUserNumber(number){


//
// //This function will take the inputted user number.

  var emptyArray = [];

  for(var i = 0; i <= number; i++) {
    console.log(i);
    emptyArray.push(i);
  };
}





//And output an array of numbers n-user number.







//User Interface
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var number = $(parseInt("#number").val();
     var result = counter(userInput)
     $("#output").text(result);
     event.preventDefault();
  });
});
