const data = require('./puzzle');

const part1 = (data) =>
  data.split('\n\n').reduce(
    (accu, calories) =>
      Math.max(
        accu,
        calories.split('\n').reduce((accu, calorie) => accu + +calorie, 0)
      ),
    0
  );

const part2 = (data) =>
  data
    .split('\n\n')
    .map((calories) =>
      calories.split('\n').reduce((accu, calorie) => accu + +calorie, 0)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((accu, calories) => accu + calories, 0);
// solution 2:
// data
//   .split('\n\n')
//   .map((item) => item.split('\n').reduce((accu, value) => accu + +value, 0))
//   .reduce(
//     ({ stack, size }, value) => {
//       let i = size;
//       stack.push(value);
//       while (stack[i] > stack[i - 1]) {
//         [stack[i], stack[i - 1]] = [stack[i - 1], stack[i]];
//         i--;
//       }
//       if (size > 2) stack.pop();
//       else size++;
//       return { stack, size };
//     },
//     { stack: [], size: 0 }
//   )
//   .stack.reduce((accu, calories) => accu + calories, 0);

console.log(`Part1 answer was \`${part1(data)}\``);
console.log(`Part2 answer was \`${part2(data)}\``);
