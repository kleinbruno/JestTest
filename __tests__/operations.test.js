const sum = require('../src/operations/sum')
const subtract = require('../src/operations/subtract')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtract 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2)
})