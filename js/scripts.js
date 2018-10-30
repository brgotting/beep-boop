


// //Business Logic

function getNumber(userNumber){

  var userNumber = []

  if (inputNumber < 0){
    return "Be postivie!";
  }
  else{
    userNumber.push(userNumber)
  }

  return userNumber


  }

};

function translation(userNumber){

var zeroThroughInputNumber = [];

for(var i = 0; i <= inputNumber; i++) {

  zeroThroughInputNumber.push(i);

  if (zeroThroughInputNumber[i] % 3 === 0){
    return "I'm sorry Dave, i'm afraid I can't do that.";
  }
  else if (zeroThroughInputNumber[i] === 1)
    return "1.";
  }

};





//User Interface




$(document).ready(function() {

  $("form#userInput").submit(function(event) {
     var inputNumber= parseInt($("#inputNumber").val())
     $("#output").text(emptyArray);
     var notPositive = getNumber($("#inputNumber").val()))
     var translation = translation($("#inputNumber").val()))
     event.preventDefault();

  });

});
