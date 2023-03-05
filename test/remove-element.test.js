const { removeElement } = require('../lib/27.remove-element.js')

describe('test 27.remove-element.js', () => {
  test('remove-element', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
  })
})
