var translateToKlingonlate = (function () {
	 var language = {
	 	merry: "Quch",
	 	christmas: "jul",
	 	and: "je",
	 	happy: "Quch",
	 	new: "chu\'",
	 	year: "DIS"
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

console.log("translate: ", translateToKlingonlate);
