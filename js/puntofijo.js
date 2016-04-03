$( "#puntofijo" ).click(function() {
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
  var ev = parseFloat(Math.min(parseFloat(intmin) + (Math.random() * (parseFloat(intmax) - parseFloat(intmin))),parseFloat(intmax)));
  var x = evaluar(ev);
for(var i=1;i<=iteraciones;i++){
  $( ".append" ).append(x +"<br>");
  x = evaluar(x);
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
=======
  $( ".append" ).append(x);
}
});
>>>>>>> origin/master
