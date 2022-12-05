const puzzle = require('./puzzle');

const str = puzzle.split('\n');
const len = str[0].length;
const stackSize = (len + 1) / 4;
const stack = new Array(stackSize).fill('').map((_) => new Array());
const temp = [];
const item = [];
let i = 0;

for (const s of str) {
  if (s[1] === '1') break;
  i++;
  item.length = 0;
  for (let j = 1; j < len; j += 4) item.push(s[j]);
  temp.push(item.slice());
}

while (temp.length) {
  temp.pop().forEach((item, index) => item !== ' ' && stack[index].push(item));
}

const steps = str.slice(i + 2);
const data = { stack, steps };

const part1 = (data) =>
  data.steps
    .reduce((accu, step) => {
      let [quantities, from, to] = step
        .substring(5)
        .replace(/( from )|( to )/g, ',')
        .split(',');
      accu[+to - 1].push(
        ...accu[+from - 1]
          .splice(accu[+from - 1].length - quantities, quantities)
          .reverse()
      );
      return accu;
    }, data.stack)
    .map((item) => item[item.length - 1])
    .join('');

const part2 = (data) =>
  data.steps
    .reduce((accu, step) => {
      let [quantities, from, to] = step
        .substring(5)
        .replace(/( from )|( to )/g, ',')
        .split(',');
      accu[+to - 1].push(
        ...accu[+from - 1].splice(
          accu[+from - 1].length - quantities,
          quantities
        )
      );
      return accu;
    }, data.stack)
    .map((item) => item[item.length - 1])
    .join('');

console.log(`Part1 answer was \`${part1(JSON.parse(JSON.stringify(data)))}\``);
console.log(`Part2 answer was \`${part2(JSON.parse(JSON.stringify(data)))}\``);
