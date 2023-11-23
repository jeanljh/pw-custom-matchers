import { test, expect } from '../fixtures/base'

test('custom matcher - toBeOneOfValues', async () => {
  expect(1).toBeOneOfValues([1, 2, 3])
  expect('a').toBeOneOfValues(['a', 'b', 'c'])
  expect(null).toBeOneOfValues([1, 'a', true, null, undefined])
  expect(4).not.toBeOneOfValues([1, 2, 3])
  expect('d').not.toBeOneOfValues(['a', 'b', 'c'])
  expect(NaN).not.toBeOneOfValues([1, 'a', true, null, undefined])
})

test('custom matcher - toEachHaveValue', async () => {
  expect([1, 1, 1]).toEachHaveValue(1)
  expect(['a', 'a', 'a']).toEachHaveValue('a')
  expect([1, 2, 3]).not.toEachHaveValue(1)
  expect(['a', 'b', 'c']).not.toEachHaveValue('a')
})

test('custom matcher - toHaveStatusCode', async ({ page }) => {
  await page.goto('')
  await expect(page.waitForResponse('**/search?query=*')).toHaveStatusCode(200)
})

test('custom matcher - toHaveStatusOk', async ({ page }) => {
  await page.goto('')
  await expect(page.waitForResponse('**/search?query=*')).toHaveStatusOk()
})
