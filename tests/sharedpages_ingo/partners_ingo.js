import { test, expect } from '@playwright/test';

export async function partners_ingo ( page ) {
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'My Profile' }).click({ timeout: 90000 });
  await expect(page.getByRole('img', { name: 'Loading...' })).toBeHidden({ timeout: 60000 });
 // await expect(page.getByRole('heading', { name: 'Partners', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');

  await expect(page.getByRole('heading', { name: 'Partners', exact: true })) .toBeVisible({ timeout: 30000 });
 
  await expect(page.getByRole('link', { name: 'Add Add a partner' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'View all partners' })).toBeVisible();
  await expect(page.getByText('No partners or networks to')).toBeVisible();
  await page.getByRole('link', { name: 'Add Add a partner' }).click({ timeout: 90000 });
  await page.getByRole('button', { name: 'Search for organization ' }).click({ timeout: 90000 });
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('walter');
  await page.getByRole('menuitem', { name: 'Walter CSO', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Add a partner' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByText('Select organization *')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Proceed' })).toBeVisible();
  await page.getByRole('button', { name: 'Proceed' }).click();
}

