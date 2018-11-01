// Business logic
function getArray(userNumber) {
  var newArray = [];
  for (var i = 0; i <= userNumber; i++) {
    newArray.push(conditionals(i));
    var array = newArray.toString();
  }

  return array

}
function conditionals(indexedArray) {
  var number = indexedArray.toString()
  if (indexedArray % 3 == 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that";
  } else if (number.includes("1")) {
    return "Beep!";
  } else if (number.includes("0")) {
    return "Boop!";
  } else {
    return indexedArray;
  }

}

// UI Logic

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var translation = getArray(parseInt($("#inputNumber").val()));
    $("#output").text(translation);
  });
});
