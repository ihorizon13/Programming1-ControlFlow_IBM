// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzBuzz(n = 100) { 
  //n is the limit to see where loop ends
  // TODO: write your solution here (replace the line below).
  // Return an array of values for 1..n following FizzBuzz rules.
  // Example: fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
  // Explain your logic choices in comments as you code.
  // Purpose: Return an array

for(let i = 1; i <= 20; i++ ){ //count from 1 to 10, stop at 10
  if(i % 15 ===0){  //% = dividie and remainder, i is divisible by 15
    console.log("fizzbuzz");
  }else if(i % 3 ===0){
    console.log("fizz");
  } else if(i % 5 ===0){
    console.log("buzz");
  }
  else{
    console.log(i);
  }
}

}

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
