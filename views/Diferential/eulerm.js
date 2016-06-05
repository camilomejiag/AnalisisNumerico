function eulerModificado() {
    $( "#pegar" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>Y</th><th>Error</th></tr></thead><tbody class='append'></tbody></table>");
    var t = document.getElementById("lag").value;
    t = parseFloat(t);
    var t2 = document.getElementById("nw").value;
    t2 = parseFloat(t2);
    var y = document.getElementById("li").value;
    var ft = document.getElementById("cu").value;
    var h = document.getElementById("op").value;
    h = parseFloat(h);
    var error = 1.12515248574854;
    error = parseFloat(error);
    y = parseFloat(y);
    var scope;
    var scope2;
    var yn;
    yn = parseFloat(yn);
    var yt;
    var code2;
    var code;
    var fte = 0;
    var node2;
    var node;
    var node3;
    var k;
    var ftk;
    if (t2 === "") {
        for (var i = 0; error != 0.0; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + h * (fte + ftk);
                error = yn - yt;
            }
            if (i == 0) {
                yn = y;
            }
            scope = {
                t: t,
                y: yn
            };
            node2 = math.parse(ft, scope);
            code2 = node2.compile();
            fte = code2.eval(scope);
            k = yn + h * fte;
            scope2 = {
                t: t,
                y: k
            };

            node = math.parse(ft, scope2);
            code = node.compile();
            ftk = code.eval(scope2),
                t = t + h;
            t = t.toFixed(2);
            t = parseFloat(t);
			
			console.log("t: "+t);
			console.log("y: "+yn);
			console.log("f(t,y): "+fte);
			console.log("error: "+error);
            $( ".append" ).append("<tr><td>" + t +"</td><td>" + yn + "</td><td>" + error + "</td></tr>");
        }
    } else {
        for (var i = 0; t != t2; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + h * (fte + ftk);
                error = yn - yt;
            }
            if (i == 0) {
                yn = y;
            }
            scope = {
                t: t,
                y: yn
            };
            node2 = math.parse(ft, scope);
            code2 = node2.compile();
            fte = code2.eval(scope);
            k = yn + h * fte;
            scope2 = {
                t: t,
                y: k
            };

            node = math.parse(ft, scope2);
            code = node.compile();
            ftk = code.eval(scope2),
                t = t + h;
            t = t.toFixed(2);
            t = parseFloat(t);
			
			console.log("t: "+t);
			console.log("y: "+yn);
			console.log("f(t,y): "+fte);
			console.log("error: "+error);
            $( ".append" ).append("<tr><td>" + t +"</td><td>" + yn + "</td><td>" + error + "</td></tr>");
        }
    }
    console.log("f(t,y)" + yn);
}

function descriptioneum() {
    alert("This is an improved euler's formula, and uses euler method to predict a value and the middle point of the interval using:<br>K1 = Yi + h*F(Ti, Yi) <br>Yi+1 = Yi + (h/2)[F(Ti, Yi) + F(Ti+1, K1)]");
}