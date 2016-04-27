//initialize variables
var translater =  document.getElementById("translateButton");
var test;
var output = document.getElementById("output");
//main function to call IIFE by language in other JS files.
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
//Create an array from user input and iterate through it. Set 'answer' = to array.
	var array = text.split(" ");
	for (i = 0; i < array.length; i++){
   answer += `${test[array[i]]} `;
}
//Upper case first letter of each word and slice array.
answer = answer.charAt(0).toUpperCase() + answer.slice(1);
output.innerHTML = answer;
	
}; 
// Event listener for translate button to run function above. 
translater.addEventListener("click", translate);


