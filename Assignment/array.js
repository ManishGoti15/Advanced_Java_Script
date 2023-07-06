// make one array who have value from 1 to 10

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. print 9th and 10th index of array

// console.log(arr[9]);
// console.log(arr[10]);

// output:10,undefined



// 2. print every element of array by map and for loop

// using map
// let arr1 = arr.map((i) => {
//     console.log(i);
// });


// output:1,2,3,4,5,6,7,8,9,10

// using for loop
// for (i = 0; i < arr.length; i++) {
//     let totalCount = arr[i]
//     console.log(totalCount);
// }

// output:1,2,3,4,5,6,7,8,9,10



// 3. change a value of 6th index with 100
// arr[6] = 100
// console.log(arr);

// output: [ 1, 2, 3, 4, 5, 6, 100, 8, 9, 10 ]



// 4. print a array till element value not gratter then 100
// let arr2 = [5, 18, 86, 46, 100, 125, 105, 36, 72]
// for (i = 0; i < arr2.length; i++) {
//     let totalCount = arr2[i]
//     if (arr2[i] == 100){
//         break;
//     }
//     console.log(totalCount);
// }

// output: 5, 18, 86, 46



// 5. add 1 in every element of an array
// let newArr = arr.map((entry) => {
//     return entry+1 
// });
// console.log(newArr);

// output: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



// 6. add 0 in start of array
// arr.unshift(0);
// console.log(arr);

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// 7. add  99 in end of array
// arr.push(99);
// console.log(arr);

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99]



// 8. remove 1 element from start of  array
// arr.shift()
// console.log(arr);

// output: [2, 3, 4, 5, 6, 7, 8, 9, 10,]



// 9. remove 1 element from end of array
// arr.pop()
// console.log(arr');

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



// 10. do sum of all value of an array with use of map, reduce and for-loop
// sum = 0;
// for(i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);

// output: 55



// 11. sort a array in acending decending
// let arr1 = [3, 8, 18, 26, 95, 81, 64, 55]

// arr1.sort()
// console.log(arr1);
// arr1.sort(function(a,b){
//     return b - a
// })
// console.log(arr1);

// output:  acending:- [18, 26,  3, 55, 64,  8, 81, 95]
//          decending:- [95, 81, 64, 55, 26, 18,  8,  3]



// 12. reverce an array with use of method
// arr.reverse()
// console.log(arr);

// output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



// 13. reverce an array with use of for-loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let length = arr.length;

// for (let i = 0; i < length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[length - 1 - i];
//     arr[length - 1 - i] = temp;
// }
// console.log(arr);

// output:  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// =================================================


// task - 2

// let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]

// // 1. give all value which can devided by 2 - not use filter
// for(i = 0; i < arr.length; i++){
//     if(arr[i]%2 == 0){
//         console.log(arr[i]);
//     }
// }

// output: [2, 6, 56, 8]



// 2. give all value above 3 by use of filter
// let narr = arr.filter(e => {
//     return e > 3
// })
// console.log(narr);

// output: [6, 7, 9, 56, 8]



// 3. give index of 56
// let index = arr.indexOf(56)
// console.log(index);

// output: 7



// 4. give true/false result when check given value  is exists in array or not
// function checkvalue(a){
//     if(arr.includes(a)){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
// checkvalue(10)

// output: false


// =================================================


// task - 3

// 1. ['i','am', 'manish'] ==> want ['manish','am','i']  by use of map and loop
// using map
// let array = ['i', 'am', 'Manish'];
// let revarr = array.map((_, index) => array[array.length - 1 - index])
//     console.log(revarr);

// output: [ 'Manish', 'am', 'i' ]


// 2. want "i am Manish" without use join method
// let arr = ['i', 'am', 'Manish'];
// let result = '';
// for (let i = 0; i < arr.length; i++){
//     result += arr[i];
//     if (i !== arr.length - 1){
//         result += ' ';
//     }
// }
// console.log(result);

// output: i am Manish


// =================================================


// task - 4 
// 1. ['i','am', 'manish'] ==> want ['hsinam','ma','i']
// by use of map, loop

// const array = ['i', 'am', 'manish'];

// const reversedWords = array.map(word => word.split('').reverse().join(''));

// const outputArray = reversedWords.reverse();

// console.log(outputArray);

// output: [ 'hsinam', 'ma', 'i' ]



// 2.- [manish , am ,i]
// const reversedWords = array.map(word => word.split('').join(''));

// const outputArray = reversedWords.reverse();

// console.log(outputArray);

// output: [ 'manish', 'am', 'i' ]