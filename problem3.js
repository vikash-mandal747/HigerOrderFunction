// 3. Given an array of numbers, use reduce() to calculate the sum of all elements. Input: [5, 10, 15, 20] Expected Output: 50
const input = [5, 10, 15, 20];
const add = (input) =>{
    return input.reduce((accumulator,element) => accumulator+element,0);
};
console.log(add(input));//50