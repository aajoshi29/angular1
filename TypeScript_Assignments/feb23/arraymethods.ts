let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Printing all the numbers using forEach: ");
nums.forEach((num) => {
  console.log(num);
});
console.log();

console.log("Extracting all the even numbers using filter method: ");
let even_nums = nums.filter((num) => {
  return num % 2 == 0;
});
console.log(even_nums);
console.log();

console.log("Finding the squares of all the numbers using map method: ");
let nums_squares = nums.map((num, _) => {
  if (num % 2 !== 0) {
    return num ** 2;
  }
});
console.log(nums_squares);
console.log();
