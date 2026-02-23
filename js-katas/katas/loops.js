// Loops kata: return the first n even numbers (starting at 2)

function firstNEven(n = 10) {
  // TODO: write your solution here (replace the line below).
  // Return an array of the first n even numbers (starting at 2).
  // Example: firstNEven(5) -> [2, 4, 6, 8, 10]
  // Explain your logic choices in comments as you code.
  if(n < 0){
  throw new Error('Not implemented, n must be non implemented');
}
const evenNumbersResults = []; //setting array as "even..."

for(let i = 1; i <= n; i += 1){ //count from 2 to 10, stop at 10
 //divisible by 2, leaves no remainder
    evenNumbersResults.push(i * 2); //prints out i and multiplies it by 2
 
 
}
return evenNumbersResults;
}


globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.firstNEven = firstNEven;
