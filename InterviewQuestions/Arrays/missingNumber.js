// Find the missing number in a given integer array of 1 to 100
// ** ?? Does this sequence start at 0 or 1? // end at 99 or 100?

let array = [6] // declare the array
let count = 100 // count is the assigned ending integer in array
let missing = new Array() // missing is the new array the numbers missing will be pushed to

for (let i = 1; i <= count; i++) {
  // create a loop that starts at 1 and as long as 1 is <= to the count the loop will continue to execute (will only stop when condition becomes false or when the count goes above 100)
  if (array.indexOf(i) === -1) {
    // indexOf will return each element that is not present in array
    missing.push(i)
    // push method adds missing items to the new array called missing
  }
}

console.log(missing)
// logs all the missing numbers in array into a the new array named missing
