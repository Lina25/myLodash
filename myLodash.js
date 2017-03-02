(function (window) {
  'use strict'

  function defineLodash() {
    var myLodash = {};
    
    
    //max
    myLodash.max = function (array) {
      var max = array[0];
      for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        }
      }
      return max;
    };
    
    
    //min
    myLodash.min = function (array) {
      var min = array[0];
      for (var i = 0; i < array.length; i++) {
        if (min < array[i]) {
          min = array[i];
        }
      }
      return min;
    };
    
    
    //sum
    myLodash.sum = function (array) {
      var numbers = [];
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    };
    

    //random
    myLodash.random = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return random;
    
    
    //range
    myLodash.range = function (start, end, step) {
      var arr = [];
      for (var i = start; i <= end; i += step) {
        arr.push(i);
      }
      return range;
    }

    return myLodash;
  }

  if (typeof (myLodash) == 'undefined') {
    window.myLodash = defineLodash();
  }
})(window);