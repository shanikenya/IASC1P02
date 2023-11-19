function Add(){
  var n1 = document.getElementById("Number1");
  var n2 = document.getElementById("Number2");
  var add = Number(n1.value) + Number(n2.value);
  document.getElementById("Result").innerHTML = add;

}

function Subtract(){
  var n1 = document.getElementById("Number1");
  var n2 = document.getElementById("Number2");
  var subtract = Number(n1.value) - Number(n2.value);
  document.getElementById("Result").innerHTML = subtract;
}

function Multiply(){
  var n1 = document.getElementById("Number1");
  var n2 = document.getElementById("Number2");
  var multiply = Number(n1.value) * Number(n2.value);
  document.getElementById("Result").innerHTML = multiply;
}

function Divide(){
  var n1 = document.getElementById("Number1");
  var n2 = document.getElementById("Number2");
  var divide = Number(n1.value) / Number(n2.value);
  document.getElementById("Result").innerHTML = divide;
}
