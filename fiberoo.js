function fib() {
  const list = [0, 1];
  for (let i = 1; i < 99; i++) {
    list[i + 1] = list[i] + list[i - 1];
  }
  return list;
}
console.log(fib());

function numToString(nums) {
  return _.map(nums, function (num) { return `${num}`; });
}
console.log(numToString(fib()));

function numEvenNums(nums) {
  return _.countBy(nums, function (num) { return num % 2 === 0; });
}
console.log(numEvenNums(fib()));
