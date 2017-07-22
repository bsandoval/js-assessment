exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var s = 0;
    for (i = 0; i < arr.length; i++) {
      s = s + arr[i];
    }
    return s;
  },

  remove: function(arr, item) {
    var tmp = arr.slice(0);
    //arr.splice(index, howmany, item1, ....., itemX)

    //NO SE POR QUE MOTIVO DEBO ELIMINAR PRIMERO EL MAYOR INDEX
    //SI LO RECORRO DE MENOR A MAYOR, EL ULTIMO ELEMENTO NO LO ELIMINA
    for (i = arr.length-1; i >=0; i--) {
      if(item == arr[i]){
          tmp.splice(i, 1);
      }
    }
    return tmp;
  },

  removeWithoutCopy: function(arr, item) {
    //NO SE POR QUE MOTIVO DEBO ELIMINAR PRIMERO EL MAYOR INDEX
    //SI LO RECORRO DE MENOR A MAYOR, EL ULTIMO ELEMENTO NO LO ELIMINA
    var occur = this.findAllOccurrences(arr, item);
    for (i = occur.length-1; i >=0; i--) {
      arr.splice(occur[i], 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    //arr.splice(index, howmany, item1, ....., itemX)
    //howmany is for remove
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    //arguments like the splice sentence
    //splice(index, howmany, item1, ....., itemX)
    var args = [arr1.length, 0].concat(arr2);
    //console.log('Arguments for concat: '+args)

    //The apply function is used to call another function, 
    //with a given context and arguments, provided as an array
    Array.prototype.splice.apply(arr1, args);
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return this.findAllOccurrences(arr, item).length;
  },

  duplicates: function(arr) {
    var sort = arr.slice(0).sort();
    var result = [];
    for (i = 0; i < arr.length - 1; i++) {
        if (sort[i + 1] == sort[i]) {
          if(result.indexOf(sort[i]) < 0){
              result.push(sort[i]);
          }
        }
    }
    return result;
  },

  square: function(arr) {
    for (i = 0; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    for(i = 0; i < arr.length; i++){
        if (arr[i] === target){
          indexes.push(i);
        }
    }
    return indexes;
  }
};
