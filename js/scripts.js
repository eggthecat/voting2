$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#adult").show();
  } else {
    $("#under18").show()
  }
});
