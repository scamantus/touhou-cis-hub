
function loadJSON(file, fun, err) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200")
            fun(xobj.responseText);
		else{
			err();
			//TODO: error handling
		}
    };
    xobj.send(null);  
}