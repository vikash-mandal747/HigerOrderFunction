/*
Write a custom higher-order function called forEachCustom() that behaves like forEach(). It
should take an array and a callback function and apply the callback to each element of the
array.
Example
*/
let arr = [2,8,3,4,6];
function fn(element,i,arr){
    console.log(`Element: ${element}, Index: ${i}, Array: [${arr}]`);
 }
function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

console.log(forEachCustom(arr,fn));
