// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzBuzz(n = 100) { 
  //n is the limit to see where loop ends
  // TODO: write your solution here (replace the line below).
  // Return an array of values for 1..n following FizzBuzz rules.
  // Example: fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
  // Explain your logic choices in comments as you code.
  
  //No negative numbers
  if(n <1){
    throw new Error('n must be positive');
  }
  // Purpose: Return an array

const results = [];
for(let i = 1; i <= n; i += 1 ){ //count from 1 to 10, stop at 10
  if(i % 15 ===0){  //% = dividie and remainder, i is divisible by 15
    results.push("FizzBuzz");
  }else if(i % 3 ===0){
    results.push("Fizz");
  } else if(i % 5 ===0){
    results.push("Buzz");
  }
  else{
    results.push(i);
  }
}
return results;

}
fizzBuzz(5);
globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
