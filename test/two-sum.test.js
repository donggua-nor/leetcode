const { twoSum } = require('../lib/1.two-sum.js')

describe('test 1.two-sum.js', () => {
  test('two-sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})
