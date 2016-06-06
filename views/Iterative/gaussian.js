function descriptiongau() {
  alert("This basic technique can extend until big system equations by developing a systemic scheme to eliminate unknown variables. Gaussian Elminitaion is the most basic (not the most efficient) method to solve linear equations.");
}

function eliminacionG() {
    var tamano = parseInt(document.getElementById("numeg").value);
    var puntos = document.getElementById("puntoseg").value;
    var vectorB = document.getElementById("vecteg").value;
    var puntoS = String(puntos);
    vectorB = String(vectorB);
    var M = m4th.matrix;
    B = M(tamano);
    var x = [];
    var pivoteCe = false;
    //var a = A.get(0, 3); // get entry in row 0 and column 3
    //A.set(1, 2, 3); // set entry in row 1 and column 2 to value 3
    var cx = 0;
    var t = 0;
    var y = 0;
    var temp = 0;
    var c = 0;
    var n = puntoS.length;
    var n2 = vectorB.length;
    for (var i = 0; i < n; i++) {
        if (puntoS.charAt(i) === "(") {
            for (var j = i; j == j; j++) {
                if (puntoS.charAt(j) === ",") {
                    cx = c;
                    c = j;
                    if (cx == 0) {
                        temp = parseFloat(puntoS.substr(i + 1, c));
                        B.set(t, y, temp);
                        y++;
                    } else {
                        temp = parseFloat(puntoS.substr(cx + 1, c));
                        B.set(t, y, temp);
                        y++;
                    }

                }
                if (puntoS.charAt(j) === ")") {
                    temp = parseFloat(puntoS.substr(c + 1, j - c - 1));
                    B.set(t, y, temp);
                    t++;
                    c = 0;
                    cx = 0;
                    temp = 0;
                    y = 0;
                    i = j;
                    break;
                }

            }
        }
    }
    for (var i = 0; i < n2; i++) {
        t = 0;
        if (vectorB.charAt(i) === "(") {
            for (var j = i; j == j; j++) {
                if (vectorB.charAt(j) === ",") {
                    cx = c;
                    c = j;
                    if (cx == 0) {
                        temp = parseFloat(vectorB.substr(i + 1, c));
                        x[t] = temp;
                        t++;
                    } else {
                        temp = parseFloat(vectorB.substr(cx + 1, c));
                        x[t] = temp;
                        t++;
                    }

                }
                if (vectorB.charAt(j) === ")") {
                    temp = parseFloat(vectorB.substr(c + 1, j - c - 1));
                    x[t] = temp;
                    t++;
                    c = 0;
                    cx = 0;
                    temp = 0;
                    y = 0;
                    i = j;
                    break;
                }

            }
        }
    }
    for (var i = 0; i < tamano; i++) {
        pivoteCe = false;
        if (B.get(i, i) != 1) {
            var xb = x[i];
            var pivote = B.get(i, i);
            var pivote2 = 0;
            if (pivote != 0) {
                xb = xb * (1 / pivote);
                x[i] = xb;
                pivote2 = pivote;
                pivote = pivote * (1 / pivote);
                B.set(i, i, pivote)
                for (var j = i + 1; j < tamano; j++) {
                    var VN = B.get(i, j);
                    VN = VN * (1 / pivote2);
                    B.set(i, j, VN);
                }
            } else {
                for (var j = i + 1; j < tamano; j++) {
                    if (B.get(j, i) != 0) {
                        for (var y = j; y < tamano; y++) {
                            var cambiar = B.get(j, y);
                            var cambiar2 = B.get(i, y);
                            B.set(j, y, cambiar2);
                            B.set(i, y, cambiar);
                        }
                        i = i - 1;
                        pivoteCe = true;
                        break;
                    }
                }
            }
        }

        //var a = A.get(0, 3); // get entry in row 0 and column 3
        if (pivoteCe != true) {
            var c = B.get(i, i);
            var xc = x[i];
            var a2 = 0;
            for (var j = i + 1; j < tamano; j++) {
                var a = B.get(j, i);
                var xv = x[j]
                if (a != 0) {
                    xv = xv - (xc * a),
                        x[j] = xv;
                    a2 = a;
                    a = a - (a * c);
                    B.set(j, i, a);
                    for (var y = i + 1; y < tamano; y++) {
                        var NV = B.get(j, y);
                        var c2 = B.get(i, y);
                        NV = NV - (a2 * c2);
                        B.set(j, y, NV);
                    }
                }
            }
        }
        if (pivoteCe != true) {
            var c = B.get(i, i);
            var xc = x[i];
            var a2 = 0;
            for (var j = 0; j < i; j++) {
                var a = B.get(j, i);
                var xv = x[j]
                if (a != 0) {
                    xv = xv - (xc * a),
                        x[j] = xv;
                    a2 = a;
                    a = a - (a * c);
                    B.set(j, i, a);
                    for (var y = i + 1; y < tamano; y++) {
                        var NV = B.get(j, y);
                        var c2 = B.get(i, y);
                        NV = NV - (a2 * c2);
                        B.set(j, y, NV);
                    }
                }
            }
        }

    }
    console.log(x);
}
