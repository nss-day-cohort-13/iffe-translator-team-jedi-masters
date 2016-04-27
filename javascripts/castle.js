// Adds new language to initial function
var language = (function(translate) {
	var newBooty = {
		merry: "booty",
		christmas: "booti",
	    and: "bewti",
		happy: "buhdi",
		new: "rockin",
		year: "everywhere"
	}	
//return new language
	translate.toCastle = function() {
		return newBooty;
	}

	return translate;
}(language));
