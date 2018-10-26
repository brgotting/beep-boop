


// //Business Logic
function getArrays(inputNumber){


  var zeroThroughInputNumber = [];

  for(var i = 0; i <= inputNumber; i++) {

    emptyArray.push(i);

  }

};







//User Interface




$(document).ready(function() {

  $("form#userInput").submit(function(event) {



     var inputNumber= parseInt($("#inputNumber").val())

     $("#output").text(emptyArray);

     event.preventDefault();

  });

});
