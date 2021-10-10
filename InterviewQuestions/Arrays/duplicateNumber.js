// How do you find the duplicate number on a given integer array?

// *** REMOVES the duplicate numbers with the filter method
// let arr = [1, 2, 3, 2, 4, 5, 5, 6]

// function removeDuplicates(data) {
//   return data.filter((value, index) => data.indexOf(value) === index)
// }
// console.log(removeDuplicates(arr)) // [1, 2, 3, 4, 5, 6]

// *** RETRIEVES the duplicate numbers with the filter method
let arr = [1, 2, 3, 2, 4, 5, 5, 6]

function getDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) !== index)
}
console.log(getDuplicates(arr)) // [2, 5]
