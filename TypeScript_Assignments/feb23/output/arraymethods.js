var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Printing all the numbers using forEach: ");
nums.forEach(function (num) {
    console.log(num);
});
console.log();
console.log("Extracting all the even numbers using filter method: ");
var even_nums = nums.filter(function (num) {
    return num % 2 == 0;
});
console.log(even_nums);
console.log();
console.log("Finding the squares of all the numbers using map method: ");
var nums_squares = nums.map(function (num, _) {
    if (num % 2 !== 0) {
        return Math.pow(num, 2);
    }
});
console.log(nums_squares);
console.log();
