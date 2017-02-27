(function(window){
	'use strict'

	function defineLodash(){
		var myLodash = {};

		myLodash.max = function(array){
			var max = array[0];
			for(var i = 0; i < array.length; i++){
				if(max < array[i]) {
					max = array[i];
				}
			}
			return max;
		};

		return myLodash;
	}

	if(typeof(myLodash) == 'undefined'){
		window.myLodash = defineLodash();
	}
})(window);