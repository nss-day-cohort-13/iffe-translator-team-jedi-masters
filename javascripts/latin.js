// Christmas et anni beatum
var translateToLatin = (function(translate) {
    var latin = {
        merry: "merri",
        christmas: "Christmas",
        and: "et",
        happy: "anni",
        new: "neau",
        year: "beatum"
    }
    language.merry = "merri ";
    language.christmas = "christmas ";
    language.and = "et ";
    language.happy = "anni ";
    language.new = "neau ";
    language.year = "beatum ";

    translate.toLatin = function() {
        return latin;
    }
    return translate;

})(translate);
