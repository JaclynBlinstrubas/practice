// How do you find the largest and smallest number in an unsorted integer array?

numbers = [2, 5, 38, 24, 45, 13, 103]

let largest = numbers[0]
let smallest = numbers[0]

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]
  } else if (numbers[i] < smallest) {
    smallest = numbers[i]
  }
}

console.log(largest)
console.log(smallest)
