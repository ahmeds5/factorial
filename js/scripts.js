var factorial = function(number1) {
  var startingNumber = 1;

  for(i=number1; i>0; i--) {
    startingNumber *= i;
  }
  return startingNumber;
}

$(document).ready(function(){
  $("#factorial").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("input#number1").val());

    $(".result").show();
    $("#result").text(factorial(inputNumber));

  });
});
