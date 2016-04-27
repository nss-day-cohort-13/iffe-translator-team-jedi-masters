var translate = (function (originalTrans) {
	 var klingonLanguage = {
	 	merry: "Quch",
	 	christmas: "jul",
	 	and: "je",
	 	happy: "Quch",
	 	new: "chu\'",
	 	year: "DIS"
	 };

   originalTrans.toKlingon = function() {
    return klingonLanguage;
   };

   return originalTrans;
})(translate);

