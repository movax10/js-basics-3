function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
  var _range = function(start, end, step, arr){
    if (!step) return _range(start, end, 1, arr);
    if ((end - start) * step < 0) return arr;
    else return _range(start + step, end, step, arr.concat([start]));
  }
  return _range(start, end, step, []);
}

function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.
  var _sum = function(arr, acc){
    if (arr.length < 1) return acc;
    acc += arr[arr.length - 1];
    return _sum(arr.slice(0, -1), acc);
  }
  return _sum(numbers, 0);
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.
  var _reverse = function(arr, arrNew){
    if (arr.length < 1) return arrNew;
    arrNew.push(arr[arr.length - 1]);
    return _reverse(arr.slice(0, -1), arrNew);
  }
  return _reverse(arr, []);
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
  var _reverse = function(arr, i){
    if (i < 0) return arr;
    arr[i] = arr[i] + arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i] - arr[arr.length - 1 - i];
    arr[i] = arr[i] - arr[arr.length - 1 - i];
    return _reverse(arr, i - 1);
  }
  return _reverse(arr, ~~((arr.length - 1)/2));
}

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument. It should use
  // helper function prepend.
  var _arrayToList = function(arr, list) {
    if (arr.length < 1) return list;
    else return _arrayToList(arr.slice(0, -1), prepend(arr[arr.length - 1], list));
  }
  return _arrayToList(arr, null);
}

function listToArray(list) {
  // Write a function that produces an array from a list
  var _listToArray = function(list, arr){
    if (list == null) return arr;
    else return _listToArray(list.rest, arr.concat([list.value]));
  }
  return _listToArray(list, []);
}

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.
  return {value : item, rest : list};
}

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.
  if (n > 0 && list !== null) return nth(n - 1, list.rest);
  else if (n == 0) return list.value;
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.
  if (typeof a != 'object' || typeof b != 'object'){
    return a === b;
  }
  else {
    if (a === b || a === null || b === null) return a === b;
    for(prop in a) if (a.hasOwnProperty(prop) && !deepEqual(a[prop], b[prop])) return false;
    for(prop in b) if (b.hasOwnProperty(prop) && !deepEqual(a[prop], b[prop])) return false;
    return true;
  }
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
