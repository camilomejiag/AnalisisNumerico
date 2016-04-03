 function equaciones() {
var funcion = document.getElementById("formula").value;
var evaluar = document.getElementById("evaluar").value;
var evaluar2 = document.getElementById("evaluar").value;
var ev =  parseFloat(evaluar);
var ev2 =  parseFloat(evaluar2);
var evF = parseFloat(Math.min(ev + (Math.random() * (ev2 - ev)),ev2));
var scope = {
    x: evF,
    y: evF,
    z: evF,
    w: evF
};
var node2 = math.parse(funcion, scope);
var code2 = node2.compile();
alert(code2.eval(scope));
}
