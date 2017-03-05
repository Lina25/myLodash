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
        if (min > array[i]) {
          min = array[i];
        }
      }
      return min;
    };
    
    
    //sum
    myLodash.sum = function (array) {
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    };
    
    
    //random
    myLodash.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    
    
      //range
    myLodash.range = function (start, end, step) {
      var arr = [];
      for (var i = start; i <= end; i += step) {
        arr.push(i);
      }
      return arr;
    };
    
    
    //isArray
    myLodash.isArray = function (array) {
      if (array instanceof Array) {
        return true;
      }
      else {
        return false;
      }
    };
    
    
    //isBoolean
    myLodash.isBoolean = function (value) {
      return typeof value === "boolean";
    };
    
    
    //isEmpty
    myLodash.isEmpty = function (value) {
      if (value === undefined) return true;
      if (typeof (value) == 'function' || typeof (value) == 'number' || typeof (value) == 'boolean') return false;
      if (value == null || value.length === 0) return true;
      if (typeof (value) == "object") {
        var sample = true;
        for (var i in value) sample = false;
        return sample;
      }
      return false;
    };
    
    
    //clamp
    myLodash.clamp = function (number, lower, upper) {
        var clamped = Math.max(lower, Math.min(number, upper));
        return clamped;
        //return number <= lower ? lower : number >= upper ? upper : number;
      };
    
    
    //remove
    myLodash.removeByValue = function (arr, number) {
      var index = arr.indexOf(number);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    };
    
    
    //difference
    myLodash.difference = function (arr1, arr2) {
      var newArr = [];
      arr1.forEach(function (val) {
        if (arr2.indexOf(val) < 0) newArr.push(val);
      });
      arr2.forEach(function (val) {
        if (arr1.indexOf(val) < 0) newArr.push(val);
      });
      return newArr;
    };
    
    
    //drop
    myLodash.drop = function (arr, start, deleteCount) {
      var arr;
      arr.splice(start, deleteCount);
      return arr;
    };
    
    
    //findIndex
    myLodash.getIndex = function () {
      var array = [];
      var number;
      var g = array.indexOf(number);
      return g;
    };
    return myLodash;
  }
  if (typeof (myLodash) == 'undefined') {
    window.myLodash = defineLodash();
  }
})(window);