var translater =  document.getElementById("translateButton");

var translate = function () {

	var text = document.getElementById("userText").value;
	var latin = document.getElementById("latin").checked;
	var output = document.getElementById("output").innerHTML;

	if (latin) {
		output = language.toLatin();
	} else if (spanish) {
		output = language.toSpanish();
	}
	
	
}; 

translater.addEventListener("click", translate);