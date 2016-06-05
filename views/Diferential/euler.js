function euler() {
    $( "#pegar" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>Y</th><th>Error</th></tr></thead><tbody class='append'></tbody></table>");
    var t = parseFloat(document.getElementById("lag").value);
    var t2 = parseFloat(document.getElementById("nw").value);
    var y = parseFloat(document.getElementById("li").value);
    var ft = document.getElementById("cu").value;
    var h = parseFloat(document.getElementById("op").value);
    var error = 1.12515248574854;
    error = parseFloat(error);
    var scope;
    var yn;
    yn = parseFloat(yn);
    var yt;
    var code2;
    var fte = 0;
    var node2;
    if (t2 === "") {
        for (var i = 0; error != 0.0; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + h * fte;
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
                yn = yn + h * fte;
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

}

function descriptioneu() {
    alert("This method is used to predict the next Y-value using the slope (first derivate) in order to extrapolate lineally over the value of h using the formula: Yi+1 = Yi + hf(Xi, Yi)");
}
