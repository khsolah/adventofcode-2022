const data = require('./puzzle');

const part1 = (data) =>
  data.split('\n').reduce((accu, s) => {
    let [opponent, you] = s.split(' ');
    you = String.fromCharCode(you.charCodeAt(0) - 23);
    accu += you.charCodeAt(0) - 64;
    if (opponent === you) accu += 3;
    else if (
      (opponent < you && !(opponent === 'A' && you === 'C')) ||
      (opponent === 'C' && you === 'A')
    )
      accu += 6;
    return accu;
  }, 0);

const part2 = (data) =>
  data.split('\n').reduce((accu, s) => {
    let [opponent, result] = s.split(' ');
    // if (result === 'X')
    //   accu += opponent.charCodeAt(0) - 64 - (opponent !== 'A' ? 1 : -2);
    // else if (result === 'Y') accu += 3 + (opponent.charCodeAt(0) - 64);
    // else
    //   accu += 6 + (opponent.charCodeAt(0) - 64) + (opponent === 'C' ? -2 : 1);
    // 將重複的部分 (opponent.charCodeAt(0) - 64) 提出來:
    accu += opponent.charCodeAt(0) - 64;
    if (result === 'X') accu += opponent === 'A' ? 2 : -1;
    else if (result === 'Y') accu += 3;
    else accu += 6 + (opponent === 'C' ? -2 : 1);
    return accu;
  }, 0);

console.log(`Part1 answer was \`${part1(data)}\``);
console.log(`Part2 answer was \`${part2(data)}\``);
