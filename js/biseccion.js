$( "#biseccion" ).click(function() {




  var funcion = $('#funcion1').val();

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

   $( ".append1" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>X</th><th>f(x)</th><th>Error</th><th>Tolerancia</th></tr></thead><tbody class='append'></tbody></table>");

  var ima = parseFloat(intmax);
  var imi = parseFloat(intmin);
  var x = ( ima + imi)/2;
  var a;
  var b;
  var xF;
   $( ".append" ).append(x + "<br>");
 for(var i=1;i<=iteraciones ;i++){
   var xff = xF;
    a = evaluar(imi);
    b = evaluar(ima);
    xF = evaluar(x);
    var errorr = xF - xff;
   if(Math.abs(errorr)<delta){
     break;
   }
   var x2 =x;
   if(xF*a<0){
     ima = x;
     x= (imi+ima)/2;
   }else if(xF*b<0){
     imi = x;
     x= (imi+ima)/2;
   }
   var tolerancia = x-x2;
   if(Math.abs(tolerancia)<tolerancia){
     break;
   }
   $( ".append" ).append("<tr><td>" + i +"</td><td>" + x + "</td><td>"+ xF +"</td><td>" + errorr + "</td><td>"+ tolerancia +"</td></tr>");
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
