$( "#newton" ).click(function() {

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

   $( ".append1" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>X</th><th>f(x)</th></tr></thead><tbody class='append'></tbody></table>");

  var x = parseFloat(Math.min(intmin + (Math.random() * (intmax - intmin)),intmax));
  var fa;
  var fb;
for(var i=1;i<=iteraciones;i++){
  var faf = fa;
  fa = evaluar(x,funcion);
  if(Math.abs(fa-faf)<delta){
    break;
  }
  fb = evaluar(x,deriavada);
  var x2 = x;
  x = x-(fa/fb);
  if(Math.abs(x-x2)<tolerancia){
    break;
  }
}
   $( ".append" ).append("<tr><td>" + i +"</td><td>" + x + "</td><td>"+ xF +"</td></tr>");
}
});

function evaluar(evaluar,fun){
  var ev =  parseFloat(evaluar);
  var scope = {
      x: ev,
      y: ev,
      z: ev,
      w: ev
  };
  var node = math.parse(funcion, fun);
  var code = node.compile();
  var res = code.eval(scope);
  return res;
}
