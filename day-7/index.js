const puzzle = require('./puzzle');

function init(data) {
  const s = data.split('\n');
  const len = s.length;
  const path = [];
  const dirs = {};
  let temp = '',
    size = 0,
    children = [],
    currDir = '';

  for (let i = 0; i < len; i++) {
    if (/^\$ cd/.test(s[i])) {
      temp = s[i].substring(5);
      if (temp === '..') path.pop();
      else path.push(temp);
      continue;
    }

    size = 0;
    children.length = 0;
    currDir = path.join('/');
    while (++i < len && !/^\$/.test(s[i])) {
      temp = s[i].split(' ');
      if (temp[0] === 'dir') children.push(`${currDir}/${temp[1]}`);
      else size += +temp[0];
    }

    dirs[path.join('/')] = {
      size,
      children: children.slice(),
      calculated: false
    };
    i--;
  }

  for (const key in dirs) {
    calculateSize(dirs, key);
  }

  return dirs;
}

function calculateSize(dirs, target) {
  if (dirs[target].calculated) return dirs[target].size;

  dirs[target].calculated = true;
  dirs[target].size += dirs[target].children.reduce((accu, dir) => {
    dirs[dir].size = calculateSize(dirs, dir);
    return accu + dirs[dir].size;
  }, 0);
  return dirs[target].size;
}

const part1 = (data) => {
  let ans = 0;
  for (const key in data) {
    if (data[key].size < 100_000) ans += data[key].size;
  }
  return ans;
};

const part2 = (data) => {
  const totalSize = data['/'].size - 40_000_000;
  let min = Infinity;
  for (const key in data) {
    if (totalSize - data[key].size <= 0) min = Math.min(min, data[key].size);
  }
  return min;
};

const data = init(puzzle);
console.log(`Part1 answer was \`${part1(data)}\``);
console.log(`Part2 answer was \`${part2(data)}\``);
