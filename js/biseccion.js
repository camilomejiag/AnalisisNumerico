$( "#biseccion" ).click(function() {
  console.log(document.getElementById("funcion").src)
  if (document.getElementById("funcion").innerHTML == "") {
  alert("No ingreso anda en el campo funcion. Vuelta a intentar.");
} else {
  alert("Prosiga con los demas");
}
});
