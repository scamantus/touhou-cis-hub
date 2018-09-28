
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

function Normalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function addText(block, text){
	block.appendChild(document.createTextNode(text));
}

function myNewBlock(type, cl){
	var ret = document.createElement(type);
	if (cl !== undefined)
		ret.className = cl;
	return ret;
}

function myNewText(type, text){
	var ret = document.createElement(type);
	if (text !== undefined)
		addText(ret, text);
	return ret;
}

function getFromTemp(temp, sel){
	return temp.content.querySelector(sel).cloneNode(true);
}

/* copied from https://www.w3schools.com/js/js_cookies.asp */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
