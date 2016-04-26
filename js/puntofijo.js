$( "#puntofijo" ).click(function() {

  var funcion = $('#funcion1').val();

  var derivada = $('#derivada').val();
  var intmin = $('#intmin').val();
  var intmax = $('#intmax').val();
  var iteraciones = $('#iteraciones').val();
  var delta = $('#delta').val();
  var tolerancia = $('#tolerancia').val();


  if (funcion == "") {

  alert("No ingreso nada en el campo funcion. Vuelta a intentar.");
} else if (intmin == "") {
  alert("No ingreso nada en el campo Intervalo Minimo. Vuelta a intentar.");
} else if (intmax == "") {
  alert("No ingreso nada en el campo Intervalo Maximo. Vuelta a intentar.");
} else if (iteraciones == "") {
  alert("No ingreso nada en el criterio Iteraciones. Vuelta a intentar.");
} else if (delta == "") {
  alert("No ingreso nada en el criterio Error Abolsuto. Vuelta a intentar.");
} else if (tolerancia == "") {
  alert("No ingreso nada en el criterio tolerancia. Vuelta a intentar.");
} else {

    $( ".append1" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>X</th><th>f(x)</th><th>F'(x)</th><th>Error</th></tr></thead><tbody class='append'></tbody></table>");

  var x = parseFloat(Math.min(parseFloat(intmin) + (Math.random() * (parseFloat(intmax) - parseFloat(intmin))),parseFloat(intmax)));
for(var i=1;i<=iteraciones;i++){
   $( ".append" ).append("<tr><td>" + i +"</td><td>" + x + "</td><td>"+ evaluar(x) +"</td><td>" + errorr + "</td></tr>");
  var x2 = x;
  x = evaluar(x);
  var errorr = x-x2;
  if(Math.abs(errorr)<tolerancia){
    break;
  }
}

}
});

function evaluar(evaluar){
    var funcion = $('#funcion1').val();
  var ev =  parseFloat(evaluar);
  var scope = {
      x: ev,
      y: ev,
      z: ev,
      w: ev
  };
  var node = math.parse(funcion, scope);
  var code = node.compile();
  var res = code.eval(scope);
  return res;
}
