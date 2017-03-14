(function (window) {
  'use strict'

  function defineLodash() {
    var myLodash = {};

    //max
    myLodash.max = function (array) {
      if (!myLodash.isArray(array)) {
        return undefined;
      }
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
      if (!myLodash.isArray(array)) {
        return undefined;
      }
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
      if (!myLodash.isArray(array)) {
        return undefined;
      }
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    };

    //random
    myLodash.random = function (min, max) {
      //#1
      // var tmp = max;
      // if (min > max) {
      //   max = min;
      //   min = tmp;
      // }

      //#2
      if (min > max) {
        return undefined;
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    //range
    myLodash.range = function (start, end, step) {
      if ((start > end) || (step < 0)) {
        return undefined;
      }
      var arr = [];
      for (var i = start; i <= end; i += step) {
        arr.push(i);
      }
      return arr;
    };

    //isArray
    myLodash.isArray = function (array) {
      return array instanceof Array;
    };


    //isBoolean
    myLodash.isBoolean = function (value) {
      return typeof value === "boolean";
    };


    //isEmpty
    myLodash.isEmpty = function (value) {
      if (value === undefined) {
        return true;
      }

      var validTypes = ['function', 'number', 'boolean'];
      for (var i = 0; i < validTypes.length; i++) {
        if (typeof (validTypes[i])) {
          return false;
        }
      }

      if (value == null || value.length === 0) {
        return true;
      }

      if (typeof (value) == "object") {
        var sample = true;
        for (var i in value) sample = false;
        return sample;
      }
      return false;
    };


    //clamp
    myLodash.clamp = function (number, lower, upper) {
      if (lower > upper) {
        return undefined;
      }
      return Math.max(lower, Math.min(number, upper));
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
        if (arr2.indexOf(val) < 0) {
          newArr.push(val);
        }
      });
      arr2.forEach(function (val) {
        if (arr1.indexOf(val) < 0) {
          newArr.push(val);
        }
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
    myLodash.getIndex = function (array, predicate) {
      for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
          return i;
        }
      }
      return -1;
    };

    //forEach
    myLodash.forEach = function (array, predicate) {
      for (var i = 0; i < array.length; i++) {
        predicate(array[i]);
      }
    };

    //groupBy
    myLodash.groupBy = function (array, predicate) {
      var result = {};

      for (var i = 0; i < array.length; i++) {
        var key = predicate(array[i]);
        if (myLodash.isEmpty(result[key])) {
          result[key] = [array[i]];
        } else {
          result[key].push(array[i]);
        }
      }

      return result;
    };

    //sortBy
    myLodash.sortBy = function (array) {
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
          if (array[j] > array[j + 1]) {
            var tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
          }
        }
      }

      return array;
    };

    return myLodash;
  }
  if (typeof (myLodash) == 'undefined') {
    window.myLodash = defineLodash();
  }
})(window);