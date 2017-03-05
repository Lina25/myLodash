(function(){
	// max 
	console.log("Test max");
	var array = [-1, 0, 6, -9];
	console.log(array);
	var maxResult = myLodash.max(array);
	console.log(maxResult);
})();


 (function(){
	// min 
	console.log("Test min");
	var array = [-1, 2, 6, -9];
	console.log(array);
	var minResult = myLodash.min(array);
	console.log(minResult);
})();



(function(){
	// sum 
	console.log("Test sum");
	var array = [2, 9];
	console.log(array);
	var sumResult = myLodash.sum(array);
	console.log(sumResult);
})();


(function(){
	// random 
	console.log("Test random");
	var min = 2;
	var max = 10;
	console.log(min, max);
	var randomResult = myLodash.random(min, max);
	console.log(randomResult);
})();


(function(){
	// range
	console.log("Test range");
	var start = 2;
	var end = 20;
	var step = 2;
  
	console.log(start, end, step);
	var rangeResult = myLodash.range(start, end, step);
	console.log(rangeResult);
})();



(function(){
	// isArray
	console.log("Test isArray");
	var array = 5;
	console.log(array);
	var arrayResult = myLodash.isArray(array);
	console.log(arrayResult);
})();
   

(function(){
	// isBoolean
	console.log("Test isBoolean");
	var value = true;
	console.log(value);
	var booleanResult = myLodash.isBoolean(value);
	console.log(booleanResult);
})();


(function(){
	// isEmpty
	console.log("Test isEmpty");
	var value = {};
	console.log(value);
	var emptyResult = myLodash.isEmpty(value);
	console.log(emptyResult);
})();


(function(){
	// clamp
	console.log("Test clamp");
	var number = 1;
    var lower = 2;
    var upper = 10;
	console.log(number, lower, upper);
	var clampResult = myLodash.clamp(number, lower, upper);
	console.log(clampResult);
})();


(function(){
	// remove
	console.log("Test remove");
    var arr = [2,1,3,5,9];
	var number = 9;
	console.log(arr, number);
	var removeResult = myLodash.removeByValue(arr, number);
	console.log(removeResult);
})();


(function(){
	// difference
	console.log("Test difference");
    var arr1 = [2,1,3,5];
    var arr2 = [7,8];
	var diffResult = myLodash.difference(arr1, arr2);
	console.log(diffResult);
})();



(function(){
	// drop
	   console.log("Test drop");
        var arr = [2,3,4];
        console.log(arr);
        var start = 0; 
        var deleteCount = 2;
	var dropResult = myLodash.drop(arr, start, deleteCount);
	console.log(dropResult);
})();


(function(){ //?????????
	// findIndex
	   console.log("Test findIndex");
        var array = [2,6,8];
        console.log(array);
        var number = 2;
	var findIndexResult = myLodash.getIndex(??);
	console.log(findIndexResult);
})();




































