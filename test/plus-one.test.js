const { plusOne } = require('../lib/66.plus-one.js')

describe('test 66.plus-one.js', () => {
  test('plus-one', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
    expect(plusOne([9])).toEqual([1, 0])
  })
})
