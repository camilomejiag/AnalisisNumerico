$( "#reglafalsa" ).click(function() {
  var bla = $('#funcion1').val()
  var intmin = $('#intmin').val()
  var intmax = $('#intmax').val()
  console.log(bla);
  if (bla == "") {
  alert("No ingreso anda en el campo funcion. Vuelta a intentar.");
} else if (intmin == "") {
  alert("No ingreso anda en el campo Intervalo Minimo. Vuelta a intentar.");
} else if (intmax == "") {
  alert("No ingreso anda en el campo Intervalo Maximo. Vuelta a intentar.");
} else {
  $( ".append" ).append( "<p>Test</p>" );
}
});
