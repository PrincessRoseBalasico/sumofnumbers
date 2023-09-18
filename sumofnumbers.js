const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i]
    ;
    i++;
  }
  return total;
};
console.log(sumWhile(testNums));

function sumRecursion(nums, index = 0) {
  if (index === nums.length) {
    return 0;
  }
  return nums[index] + sumRecursion(nums,index + 1);
}
console.log(sumRecursion(testNums));

const sumTheSimpleWay = (nums) => _.reduce(nums, function (memo, num){ return memo + num;}, 0);

console.log(sumTheSimpleWay(testNums));