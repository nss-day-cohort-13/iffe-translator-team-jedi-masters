var translate = (function (originalTrans) {
	var klingon = {
	merry:"Quch",
	christmas:"jul",
	and:"je",
	happy:"Quch",
	new:"chu\'",
	year:"DIS"
	};


	originalTrans.toKlingon = function(){
		return klingon;
	};



}(translate)); // iife translate

