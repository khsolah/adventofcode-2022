const data = require('./puzzle')

const part1 = data => {
  const len = data.length;
  const set = new Set()
  let j = 0
  for (let i = 0; i < len; i++) {
    while (set.has(data[i])) {
      set.delete(data[j++])
    }
    set.add(data[i])
    if (set.size === 4) return i + 1
  }
  return -1
}

const part2 = data => {
  const len = data.length;
  const set = new Set()
  let j = 0
  for (let i = 0; i < len; i++) {
    while (set.has(data[i])) {
      set.delete(data[j++])
    }
    set.add(data[i])
    if (set.size === 14) return i + 1
  }
  return -1
}

console.log(`Part1 answer was \`${part1(JSON.parse(JSON.stringify(data)))}\``);
console.log(`Part2 answer was \`${part2(JSON.parse(JSON.stringify(data)))}\``);
