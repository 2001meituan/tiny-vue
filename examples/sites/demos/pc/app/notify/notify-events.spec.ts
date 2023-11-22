import { test, expect } from '@playwright/test'

test('关闭通知框前触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#beforeClose')
  await page.getByRole('button', { name: '关闭前的事件' }).click()
  await page.locator('.tiny-notify__icon-close > .tiny-svg').click()
  const cloEveNT = await page
    .locator('div')
    .filter({ hasText: '在通知框关闭前触发的事件,返回 false 可阻止关闭通知框' })
    .nth(1)
  await expect(cloEveNT).toBeVisible()
})

test('点击关闭按钮时触发事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#close')
  await page.getByRole('button', { name: '点击关闭按钮时触发事件' }).click()
  const notify = page.locator('.tiny-notify')
  await page.locator('.tiny-notify__icon-close').click()
  const modal = page.locator('.tiny-modal__box')
  await expect(modal).toBeVisible()
})