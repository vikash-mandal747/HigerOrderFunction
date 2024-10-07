/*
4. Given an array of numbers, first filter out the odd numbers, then square the remaining numbers, and finally, calculate the sum of the
squared numbers using filter(), map(), and reduce(). Input: [1, 2, 3, 4, 5] Expected Output: 20 Explanation: Filtered even
numbers: [2, 4], squared: [4, 16], sum: 20
*/


let input = [1, 2, 3, 4, 5]
const odd = (input)=>{
   return input.filter((element)=>element%2!==0);
}
let result = odd(input);
console.log(result);//[ 1, 3, 5 ]

const square = (result) =>{
  return result.map((element)=>element*element);
}
let result2 = square(result);
console.log(result2);//[ 1, 9, 25 ]

const add = (result2)=>{
    return result2.reduce((accumulator,element)=>accumulator+element,0)
}

let result3 = add(result2);
console.log(result3);//35