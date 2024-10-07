// 2. Given an array of numbers, use filter() to return an array of only even numbers. Input: [1, 2, 3, 4, 5, 6] Expected Output: [2, 4, 6]

let input = [1, 2, 3, 4, 5, 6];
const even = (input) =>{
    return input.filter((num)=> (num%2==0));    
}
console.log(even(input));//[ 2, 4, 6 ]