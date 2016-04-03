$( "#reglafalsa" ).click(function() {
<<<<<<< HEAD
  var funcion = $('#funcion1').val();
=======
  var bla = $('#funcion1').val();
>>>>>>> origin/master
  var derivada = $('#derivada').val();
  var intmin = $('#intmin').val();
  var intmax = $('#intmax').val();
  var iteraciones = $('#iteraciones').val();
  var delta = $('#delta').val();
  var tolerancia = $('#tolerancia').val();
<<<<<<< HEAD
  var x = "<table class='table table-bordered'><thead><tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr></thead><tbody><tr><td>John</td>";
    x += "<td>Doe</td><td>john@example.com</td></tr><tr><td>Mary</td><td>Moe</td><td>mary@example.com</td></tr><tr><td>July</td>";
    x += "<td>Dooley</td><td>july@example.com</td></tr></tbody></table>;"
  if (funcion == "") {
=======
  console.log(bla);
  var x = "<table class='table table-bordered'><thead><tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr></thead><tbody><tr><td>John</td>";
    x += "<td>Doe</td><td>john@example.com</td></tr><tr><td>Mary</td><td>Moe</td><td>mary@example.com</td></tr><tr><td>July</td>";
    x += "<td>Dooley</td><td>july@example.com</td></tr></tbody></table>;"
  if (bla == "") {
>>>>>>> origin/master
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
<<<<<<< HEAD
  var ima = parseFloat(intmax);
  var imi = parseFloat(intmin);
  var a = evaluar(imi);
  var b = evaluar(ima);
  var x = ima - ((b*(ima-imi))/(b-a));
 for(var i=1;i<=iteraciones;i++){
   var xF = evaluar(x);
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
  $( ".append" ).append(x +"<br>");
}
  $( ".append" ).append("------------------------------<br>");
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
=======
  $( ".append" ).append(x);
}
});
>>>>>>> origin/master
