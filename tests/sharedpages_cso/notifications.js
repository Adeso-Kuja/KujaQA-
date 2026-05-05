import { test, expect } from '@playwright/test';

export async function notifications ( page ) {
 await page.getByRole('link', { name: 'Notifications' }).click();
  await page.getByText('All', { exact: true }).click();
  await page.getByText('Read', { exact: true }).click();
  await page.getByText('Unread').click({ timeout: 5000 });
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible({ timeout: 5000 });
  await page.getByRole('link').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Notification Settings' }).click();
  await page.getByRole('heading', { name: 'About Grants' }).click();
}