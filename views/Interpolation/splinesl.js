function splinesl() {
    var ev = document.getElementById("evaluarspl").value;
    ev = parseFloat(ev);
    var puntos = document.getElementById("lispl").value;
    var puntoS = String(puntos);
    var x = [];
    var y = [];
    var n = puntoS.length;
    var c = 0;
    var cy = 0;
    var t = 0;
    var entreUno = true;
    for (var i = 0; i < n; i++) {
        if (puntoS.charAt(i) === "(") {
            for (var j = i; j == j; j++) {
                if (puntoS.charAt(j) === "," && entreUno) {
                    c = j;
                    entreUno = false;
                }
                if (puntoS.charAt(j) === ")") {
                    cy = j;
                    break;
                }
            }
            x[t] = parseFloat(puntoS.substr(i + 1, c));
            y[t] = parseFloat(puntoS.substr(c + 1, cy - c - 1));
            entreUno = true;
            t++;
        }
    }
    var m = 0;
    var b = 0;
    var x1 = 0;
    var x0 = 0;
    var recta = "";
    var rectaE = [];
    var rectaF = [];
    for (var i = 0; i < x.length - 1; i++) {
        m = (y[i + 1] - y[i]) / (x[i + 1] - x[i]);
        b = y[i] - m * x[i];
        m = String(m);
        b = String(b);
        x0 = x[i];
        x1 = x[i + 1];
        x0 = String(x0);
        x1 = String(x1);
        if (b >= 0) {
            recta = recta.concat(m + "(x)+" + b + "		" + x0 + "<=X<=" + x1);
            rectaE[i] = recta;
            recta = "";
            recta = recta.concat(m + "(x)+" + b);
            rectaF[i] = recta;
            recta = "";
        } else {
            recta = recta.concat(m + "(x)" + b);
            rectaE[i] = recta;
            recta = "";
            recta = recta.concat(m + "(x)+" + b);
            rectaF[i] = recta;
            recta = "";
        }
    }
    for (var i = 0; i < x.length - 1; i++) {
        var scope = {
            x: ev,
            y: ev,
            z: ev,
            w: ev
        };
        x0 = x[i];
        x1 = x[i + 1];
        if (x0 <= ev && x1 <= ev) {
            var node = math.parse(rectaF[i], scope);
            var code = node.compile();
            var res = code.eval(scope);
            console.log(rectaE);
            console.log(res);
            break;
        } else if (i < x.length - 2) {
            var node = math.parse(rectaF[rectaF.length - 1], scope);
            var code = node.compile();
            var res = code.eval(scope);
            console.log(rectaE);
            console.log(res);
            $( ".splinesl" ).append("funcion: " + rectaE +". Intervalo: " + res);
            break;
        }
    }
}

function descriptionspl() {
    alert("The simplest way of connecting 2 points is by a straight line. First grade splines can be defined as an union of lineal functions:<br> f(x) = f(x0) + m0(x – x0) intervalo  x0 < x < x1<br> f(x) = f(x1) + m1(x – x1) intervalo  x1 < x < x2<br>...<br>f(x) = f(xn–1) + mn–1(x – xn–1) interval xn–1 < x < xn.<br>The only condition this method has is that X-coordenates must be ordered");
}