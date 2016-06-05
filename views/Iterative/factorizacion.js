function descriptionlu() {
  alert("The LU Factorization of a matrix is an important step on the solution of lineal equations, which normally consists on creating 2 matrixes (L & U) which satisfy the condition L * U = A, where is the one you should solve. L is a tringular Lower and U is a triangular Upper matrix.");
}

function lu() {

var a00 = parseFloat(document.getElementById("A00").value);
var a01 = parseFloat(document.getElementById("A01").value);
var a02 = parseFloat(document.getElementById("A02").value);
var a10 = parseFloat(document.getElementById("A10").value);
var a11 = parseFloat(document.getElementById("A11").value);
var a12 = parseFloat(document.getElementById("A12").value);
var a20 = parseFloat(document.getElementById("A20").value);
var a21 = parseFloat(document.getElementById("A21").value);
var a22 = parseFloat(document.getElementById("A22").value);

var y0 = parseFloat(document.getElementById("Y0").value);
var y1 = parseFloat(document.getElementById("Y1").value);
var y2 = parseFloat(document.getElementById("Y2").value);



var matrizA = [,];
var M = m4th.matrix;
var A, y, LU, x, Ainv;
// create some matrices:
A = M([
    a00,  a01, a02,
   a10, a11,  a12,
   a20,  a21,  a22
]);

y = M(3, [
    y0,
 y1,
   y2
]);



// LU decompose matrix A
LU = m4th.lu(A); // node.js: require('m4th/lu')(A);
console.log(LU);
// calculate solution for: y = A*x
x = LU.solve(y);
console.log(x);
$(".resultado").append("X1: " + x.get(0, 0) + " , X2: " + x.get(0, 1) + " , X3: " + x.get(0, 1) ".");
// invert matrix A
Ainv = LU.getInverse();




}
