const { removeDuplicates } = require('../lib/26.remove-duplicates-from-sorted-array.js')

describe('test 26.remove-duplicates-from-sorted-array.js', () => {
  test('remove-duplicates-from-sorted-array', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2)
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})
