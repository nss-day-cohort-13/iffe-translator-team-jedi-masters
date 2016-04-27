// Adds klingon function to initial language function.
var language = (function(language) {
    var klingonLanguage = {
        merry: "Quch",
        christmas: "jul",
        and: "je",
        happy: "Quch",
        new: "chu\'",
        year: "DIS"
    }
    //return klingon
    language.toKlingon = function() {
        return klingonLanguage;
    };

    return language;
 //calls initial language function
 //KAAAAAAAHHHHHHHNNNNNNNN!!!!!!!!!
})(language);
