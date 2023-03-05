const { searchInsert } = require('../lib/35.search-insert-position.js')

describe('test 35.search-insert-position.js', () => {
  test('search-insert-position', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
})
