function add() {
  var numberone = document.getElementById("number1");
  var numbertwo = document.getElementById("number2");
  var total = Number(numberone.value) + Number(numbertwo.value);
  documen.getElementById("output").innerHTML = total;
}
