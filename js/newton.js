$( "#newton" ).click(function() {
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
  var x = parseFloat(Math.min(intmin + (Math.random() * (intmax - intmin)),intmax));
  var fa;
  var fb;
for(var i=1;i<=iteraciones;i++){
  fa = evaluar(x,funcion);
  fb = evaluar(x,deriavada);
  x = x-(fa/fb);
}
  $( ".append" ).append(x);
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
=======
  $( ".append" ).append(x);
}
});
>>>>>>> origin/master
