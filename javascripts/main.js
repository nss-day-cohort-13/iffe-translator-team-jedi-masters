var translate = (function () {
	 var language = {
	 	merry: "",
	 	christmas: "",
	 	and: "",
	 	happy: "",
	 	new: "",
	 	year: ""
	 }

	 return {
	 	getlanguage: function () {
	 		 return language; 
	 	},
	 	setlanguage: function () {
	 		 language = newLanguage; 
	 	}
	 }
})(); 

console.log("translate: ", translate);