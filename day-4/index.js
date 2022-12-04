const data = require('./puzzle');

const part1 = (data) =>
  data.split('\n').reduce((accu, str) => {
    const [[a, b], [c, d]] = str.split(',').map((i) => i.split('-'));
    if ((+a <= +c && +b >= +d) || (+a >= c && +b <= +d)) accu++;
    return accu;
  }, 0);

const part2 = (data) =>
  data.split('\n').reduce((accu, str) => {
    const [[a, b], [c, d]] = str.split(',').map((i) => i.split('-'));
    if ((+a <= +c && +b >= +c) || (+a >= +c && +a <= +d)) accu++;
    return accu;
  }, 0);

console.log(`Part1 answer was \`${part1(data)}\``);
console.log(`Part2 answer was \`${part2(data)}\``);
