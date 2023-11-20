import { test, expect } from '../fixtures/base';

test('custom matcher - toContainValue', async () => {
  expect([1, 2, 3]).toContainValue(1);
  expect(['a', 'b', 'c']).toContainValue('a');
  expect([1, 'a', true, null, undefined]).toContainValue(null);
  expect([1, 2, 3]).not.toContainValue(4);
  expect(['a', 'b', 'c']).not.toContainValue('d');
  expect([1, 'a', true, null, undefined]).not.toContainValue(NaN);
});

test('custom matcher - toEachHaveValue', async () => {
  expect([1, 1, 1]).toEachHaveValue(1);
  expect(['a', 'a', 'a']).toEachHaveValue('a');
  expect([1, 2, 3]).not.toEachHaveValue(1);
  expect(['a', 'b', 'c']).not.toEachHaveValue('a');
});

test('custom matcher - toHaveStatusCode', async ({ page }) => {
  await page.goto('');
  await expect(page.waitForResponse('**/search?query=*')).toHaveStatusCode(200);
});

test('custom matcher - toHaveStatusOk', async ({ page }) => {
  await page.goto('');
  await expect(page.waitForResponse('**/search?query=*')).toHaveStatusOk();
});
