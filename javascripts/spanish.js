// adds spanish object to initial language.
var language = (function(language) {
    var spanish = {
        merry: "feliz",
        christmas: "navidad",
        and: "y",
        happy: "prospero",
        new: "nuevo",
        year: "ano"
        }
        //returns spanish object.
    language.toSpanish = function() {
        return spanish;
    }

    return language;
    //calls initial language function
}(language));
