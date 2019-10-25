const { sum } = require('../functions')

test('soma 1 + 2 para igualar a 3', () => {
  expect(sum(1, 2)).toBe(3)
})
