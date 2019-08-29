/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 18:09:15
 */
const math = require('../src/math');

test('add: 1 + 1 = 2', () => {
    expect(math.add(1, 1)).toBe(2);
})

test('sub: 10 - 1 = 9', () => {
    expect(math.sub(10, 1)).toBe(9);
})