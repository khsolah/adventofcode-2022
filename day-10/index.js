const data = require('./puzzle');

const part1 = (data) =>
  data.split('\n').reduce(
    ({ cycles, x, next, result }, s) => {
      let limit = s === 'noop' ? 1 : 2;
      for (let i = 0; i < limit; i++) {
        cycles++;
        if (cycles === next) {
          result += next * x;
          next += 40;
        }
      }
      x += s === 'noop' ? 0 : +s.split(' ')[1];
      return { cycles, x, next, result };
    },
    { cycles: 0, x: 1, next: 20, result: 0 }
  ).result;

const part2 = (data) =>
  data
    .split('\n')
    .reduce(
      ({ cycles, x, crt }, s) => {
        let limit = s === 'noop' ? 1 : 2;
        const min = x;
        const max = x + 2;
        for (let i = 0; i < limit; i++) {
          cycles++;
          if (min <= cycles % 40 && cycles % 40 <= max) crt.push('#');
          else crt.push('.');
          if (!(cycles % 40)) crt.push('\n');
        }
        x += s === 'noop' ? 0 : +s.split(' ')[1];
        return { x, cycles, crt };
      },
      {
        cycles: 0,
        x: 1,
        crt: []
      }
    )
    .crt.join('');

console.log(part1(data));
console.log(part2(data));
