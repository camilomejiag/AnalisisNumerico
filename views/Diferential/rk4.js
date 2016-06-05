function runge() {
$( "#pegar" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>Y</th><th>Error</th></tr></thead><tbody class='append'></tbody></table>");
    var t1 = document.getElementById("lag").value;
    t1 = parseFloat(t1);
    var t2 = document.getElementById("nw").value;
    var y = document.getElementById("li").value;
    var ft = document.getElementById("cu").value;
    var h = document.getElementById("op").value;
    h = parseFloat(h);
    var error = 1.12515248574854;
    error = parseFloat(error);
    y = parseFloat(y);
    var scope;
    var scope2;
    var scope3;
    var scope4;
    var yn;
    yn = parseFloat(yn);
    var yt;
    var code2;
    var code;
    var code3;
    var code4;
    var node2;
    var node;
    var node3;
    var node4;
    var k;
    var k2;
    var k3;
    var k4;
    var th;
    var yk;
    if (t2 === "null") {
        for (var i = 0; error != 0.0; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + (h / 6) * (k + k2 + k3 + k4);
                error = yn - yt;
            }
            if (i == 0) {
                yn = y;
            }
            scope = {
                t: t1,
                y: yn
            };
            node2 = math.parse(ft, scope);
            code2 = node2.compile();
            k = code2.eval(scope);
            th = t1 + (h / 2);
            yk = yn + (h * k) / 2;
            scope2 = {
                t: th,
                y: yk
            };

            node = math.parse(ft, scope2);
            code = node.compile();
            k2 = code.eval(scope2);

            th = t1 + (h / 2);
            yk = yn + (h * k2) / 2;
            scope3 = {
                t: th,
                y: yk
            };

            node3 = math.parse(ft, scope3);
            code3 = node3.compile();
            k3 = code.eval(scope3);

            th = t1 + h;
            yk = yn + h * k3;
            scope4 = {
                t: th,
                y: yk
            };

            node4 = math.parse(ft, scope4);
            code4 = node4.compile();
            k4 = code.eval(scope4);
            t1 = t1 + h;
            t1 = t1.toFixed(2);
            t1 = parseFloat(t1);
			
			console.log("t: "+t);
			console.log("y: "+yn);
			console.log("f(t,y): "+fte);
			console.log("error: "+error);
            $( ".append" ).append("<tr><td>" + t +"</td><td>" + yn + "</td><td>" + error + "</td></tr>");
        }
    } else {
        t2 = parseFloat(t2);
        for (var i = 0; t1 != t2; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + (h / 6) * (k + k2 + k3 + k4);
                error = yn - yt;
            }
            if (i == 0) {
                yn = y;
            }
            scope = {
                t: t1,
                y: yn
            };
            node2 = math.parse(ft, scope);
            code2 = node2.compile();
            k = code2.eval(scope);
            th = t1 + (h / 2);
            yk = yn + (h * k) / 2;
            scope2 = {
                t: th,
                y: yk
            };

            node = math.parse(ft, scope2);
            code = node.compile();
            k2 = code.eval(scope2);

            th = t1 + (h / 2);
            yk = yn + (h * k2) / 2;
            scope3 = {
                t: th,
                y: yk
            };

            node3 = math.parse(ft, scope3);
            code3 = node3.compile();
            k3 = code.eval(scope3);

            th = t1 + h;
            yk = yn + h * k3;
            scope4 = {
                t: th,
                y: yk
            };

            node4 = math.parse(ft, scope4);
            code4 = node4.compile();
            k4 = code.eval(scope4);
            t1 = t1 + h;
            t1 = t1.toFixed(2);
            t1 = parseFloat(t1);
			
			console.log("t: "+t);
			console.log("y: "+yn);
			console.log("f(t,y): "+fte);
			console.log("error: "+error);
            $( ".append" ).append("<tr><td>" + t +"</td><td>" + yn + "</td><td>" + error + "</td></tr>");
        }
    }
   
}

function descriptionrk() {
    alert("Runge-Kutta's methods accomplish the exctitude of Taylor's series without the need of superior order derivates. The most popular RK method is the 4th order one. There are n-order methods, each one with more variables than the previous one. The 4th order one is: k1 = f(ti, Yi) <br>k2 = f(ti + h/2, Yi + hk1/2)  <br>k3 = f(ti + h/2, Yi + hk2/2)  <br>k4 = f(ti + h, Yi + hk3) <br>Yi+1 = Yi + (h/6)[k1 + 2k2 + 2 k3 +k4]");
}