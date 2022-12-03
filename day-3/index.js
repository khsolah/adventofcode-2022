const data = require('./puzzle');

const part1 = (data) =>
  data.split('\n').reduce((accu, str) => {
    const half = str.length / 2;
    const set = new Set(str.substring(0, half));
    for (let s of str.substring(half)) {
      if (set.has(s)) {
        return accu + s.charCodeAt(0) + (s <= 'Z' ? -38 : -96);
      }
    }
    return accu;
  }, 0);

const part2 = (data) =>
  data.split('\n').reduce(
    (accu, str) => {
      accu.stack.push(str);
      if (accu.stack.length < 3) return accu;

      const set = new Set(accu.stack[0]);
      const set1 = new Set(accu.stack[1]);
      for (const s of accu.stack[2]) {
        if (set.has(s) && set1.has(s)) {
          accu.value += s.charCodeAt(0) + (s <= 'Z' ? -38 : -96);
          break;
        }
      }
      accu.stack.length = 0;
      return accu;
    },
    { stack: [], value: 0 }
  ).value;

console.log(`Part1 answer was \`${part1(data)}\``);
console.log(`Part2 answer was \`${part2(data)}\``);
