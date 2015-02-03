function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
  step = step || 1;
  var compareToEnd = function (z) {
    return start > end ? step <= 0 && z >= end: step >= 0 && z <= end;
  };
  var arr = [];
  for (var i = start; compareToEnd(i); i += step){
    arr.push(i);
  }
  return arr;
}

function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.
  var reversedArr = [];
  for (var i = arr.length -1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
  var temp;
  var count = 0;
  var reverseCount = arr.length - 1;
  while (count < reverseCount){
    temp = arr[count];
    arr[count] = arr[reverseCount];
    arr[reverseCount] = temp;
    count++;
    reverseCount--;
  }
  return arr;
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
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--)
  {
     list = prepend(arr[i], list);
  }
  return list;
}

function listToArray(list) {
  // Write a function that produces an array from a list
  if (list == null) return [];
  var arr = [list.value];
  arr = arr.concat(listToArray(list.rest));
  return arr;
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
  if (n < 0 || list == null) return;
  if (n == 0) return list.value;
  return nth(n - 1, list.rest);
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
