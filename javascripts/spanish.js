var translate = (function(originalTrans) {
  var spanish = {
    merry: "feliz",
    christmas: "navidad",
    and: "y",
    happy: "prospero",
    new: "nuevo",
    year: "ano"
  };

  originalTrans.toSpanish = function(){
    return spanish;
  };

  return originalTrans;

}(translate));


