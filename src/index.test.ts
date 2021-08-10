import { fun } from './index'


it('2 times 2 is 6', () => {
  const r: number = fun(2)
  expect(r).toBe(6)
})
