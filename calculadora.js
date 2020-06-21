function init() {
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var reset = document.getElementById("reset");
  var igual = document.getElementById("igual");
  var resultado = document.getElementById("resultado");

  var operacion;
  var num1;
  var num2;
  var res;

  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  reset.onclick = function (e) {
    refrescar();
  };

  suma.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "+";
    refrescar();
  };

  resta.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "-";
    refrescar();
  };

  multiplicacion.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "*";
    refrescar();
  };

  division.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "/";
    refrescar();
  };

  igual.onclick = function (e) {
    num2 = resultado.textContent;
    resolver(num1, num2);
  };

  function refrescar() {
    num1 = resultado.textContent;
    resultado.textContent = "";
  }

  function resolver(num1, num2) {
    switch (operacion) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
    }
    resultado.textContent = res;
  }
}
