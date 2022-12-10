const data = require('./puzzle');

const part1 = (data) => {
  const s = data.split('\n');
  const m = s.length;
  const n = s[0].length;
  let ans = (m + n) * 2 - 4;

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let north, south, east, west;

      for (north = i - 1; north > -1 && +s[north][j] < +s[i][j]; north--) {}
      for (south = i + 1; south < m && +s[south][j] < +s[i][j]; south++) {}
      for (east = j - 1; east > -1 && +s[i][east] < +s[i][j]; east--) {}
      for (west = j + 1; west < n && +s[i][west] < +s[i][j]; west++) {}
      if (north === -1 || east === -1 || south === m || west === n) ans++;
    }
  }

  return ans;
};

const part2 = (data) => {
  const s = data.split('\n');
  const m = s.length;
  const n = s[0].length;
  let ans = 0;

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let north = 0,
        south = 0,
        east = 0,
        west = 0;

      for (k = i - 1; k > -1 && +s[k][j] <= +s[i][j]; k--) {
        north++;
        if (s[k][j] === s[i][j]) break;
      }
      for (k = i + 1; k < m && +s[k][j] <= +s[i][j]; k++) {
        south++;
        if (s[k][j] === s[i][j]) break;
      }
      for (k = j - 1; k > -1 && +s[i][k] <= +s[i][j]; k--) {
        east++;
        if (s[i][k] === s[i][j]) break;
      }
      for (k = j + 1; k < n && +s[i][k] <= +s[i][j]; k++) {
        west++;
        if (s[i][k] === s[i][j]) break;
      }
      north = Math.max(1, north);
      south = Math.max(1, south);
      east = Math.max(1, east);
      west = Math.max(1, west);
      ans = Math.max(ans, south * north * east * west);
    }
  }

  return ans;
};

console.log(`Part1 answer was \`${part1(data)}\``);
console.log(`Part2 answer was \`${part2(data)}\``);
