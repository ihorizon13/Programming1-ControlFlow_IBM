// Nested kata: multiplication table (nested loops)
// Rule: build a size x size table where each cell is row * column, starting at 1.

function multiplicationTable(size = 10) {
  // TODO: write your solution here (replace the line below).
if(size < 0){ //setting the parameters
  throw new Error('Not implemented');
  }

  const resultTable = [];
for(let a  = 1; a <= 10; a++){ //first number "row" being multiplied

  for(let b = 1; b <=10; b++){ //nested loop, second number "column" being multiplied
    console.log(a*b);  // row * column

  }
  
}


  




}

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.multiplicationTable = multiplicationTable;
