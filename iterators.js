var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },
    each: function (arr, callback) {
      // if(Array.isArray(arr)){
        for(var i =0; i < arr.length; i++){
          callback(arr[i]);
          // return func(arr[i], i, arr);
        // }
      }
    },
    map: function (arr, callback) {
      var newArr = [];
      // if(Array.isArray(arr)){
        for(var i =0; i < arr.length; i++){
          newArr.push(callback(arr[i]));
          // return func(arr[i], i, arr);
        // }
      }
      return newArr;
    },
    reduce: function (arr, callback) {
      var ret;
      // if(Array.isArray(arr)){
        for(var i =0; i < arr.length; i++){
          ret += (callback(arr[i]));
          // return func(arr[i], i, arr);
        // }
      }
      return newArr;
    },
    filter: function (arr, callback) {
      var newArr = [];
      // if(Array.isArray(arr)){
        for(var i =0; i < arr.length; i++){
          if(callback(arr[i])){
            newArr.push(callback(arr[i]));  
          }
          
          // return func(arr[i], i, arr);
        // }
      }
      return newArr;
    },
    reject: function (arr, callback) {
      var newArr = [];
      // if(Array.isArray(arr)){
        for(var i =0; i < arr.length; i++){
          if(!callback(arr[i])){
            newArr.push(callback(arr[i]));  
          }
          
          // return func(arr[i], i, arr);
        // }
      }
      return newArr;
    }
  };

module.exports = iterators;
