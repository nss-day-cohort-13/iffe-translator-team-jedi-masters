var translater =  document.getElementById("translateButton");
var test;
var output = document.getElementById("output");

var translate = function () {
	var answer = "";
	var text = document.getElementById("userText").value;
	var latin = document.getElementById("latin").checked;
	var spanish = document.getElementById("spanish").checked;
	var klingon = document.getElementById("klingon").checked;
	var castle = document.getElementById("castle").checked;

	if (latin) {
		test = language.toLatin();
	} else if (spanish) {
		test = language.toSpanish();
	} else if (klingon) {
		test = language.toKlingon();
	} else {
		test = language.toCastle();
	}

	var array = text.split(" ");
	for (i = 0; i < array.length; i++){
   answer += `${test[array[i]]} `;
}
answer = answer.charAt(0).toUpperCase() + answer.slice(1);
output.innerHTML = answer;
	
}; 

translater.addEventListener("click", translate);


