// Loops kata: return the first n even numbers (starting at 2)

function firstNEven(n = 10) {
  // TODO: write your solution here (replace the line below).
  // Return an array of the first n even numbers (starting at 2).
  // Example: firstNEven(5) -> [2, 4, 6, 8, 10]
  // Explain your logic choices in comments as you code.
  if(n <1){
  throw new Error('Not implemented');
}
const evenNumbersResults = []; //setting array as "even..."

for(let i = 2; i <= 10; i ++){ //count from 2 to 10, stop at 10
 if( i % 2 === 0){ //divisible by 2, leaves no remainder
    console.log(i); //prints out for loop results
 
} 
}
return evenNumbersResults;

}

firstNEven(5);

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.firstNEven = firstNEven;
