/*
1. Given an array of numbers, use map() to create a new array that contains the squares of
each number. Input: [2, 3, 4, 5] Expected Output: [4, 9, 16, 25]
*/

let input = [2, 3, 4, 5];

const square = (element)=>{
    return input.map((element)=>element*element);
}
console.log(square(input));//[ 4, 9, 16, 25 ]