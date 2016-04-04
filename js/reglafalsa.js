$( "#reglafalsa" ).click(function() {

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

  var ima = parseFloat(intmax);
  var imi = parseFloat(intmin);
  var a = evaluar(imi);
  var b = evaluar(ima);
  var xF;
  var x = ima - ((b*(ima-imi))/(b-a));
 for(var i=1;i<=iteraciones;i++){
   var xff = xF;
   xF = evaluar(x);
   if(Math.abs(xF-xff)<delta){
     break;
   }
   var x2=x;
   if(xF*a<0){
     ima = x;
     b = evaluar(ima);
     x = ima - ((b-(ima-imi))/(b-a));
   }else if(xF*b<0){
     imi = x;
     a = evaluar(imi);
     x = imi - ((b-(ima-imi))/(b-a));
   }else {
     alert("La funcion no es valida con este metodo");
     break;
   }
   if(Math.abs(x-x2)<tolerancia){
     break;
   }
   $( ".append" ).append("<tr><td>" + i +"</td><td>" + x + "</td><td>"+ xF +"</td></tr>");
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
