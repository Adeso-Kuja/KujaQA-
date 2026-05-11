import { test, expect } from '@playwright/test';
export async function partnership_requirements ( page ) {

    //view on page
   await page.getByRole('link', { name: 'My Profile' }).click({ timeout: 90000 });

     await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
  await page.getByRole('link', { name: 'Cookie Policy' }).press('ArrowDown');
    //await expect(page.getByRole('heading', { name: 'Partnership Requirements' })).toBeVisible({ timeout: 90000 });
   await expect(page.getByText('Loading Data..')).not.toBeVisible({ timeout: 30000 });
   const heading = page.getByRole('heading', { name: 'Partnership Requirements' });
   await expect(heading).toBeVisible({ timeout: 90000 });




  await expect(page.getByRole('button', { name: 'Edit Edit' }).nth(3)).toBeVisible();
  await expect(page.getByText('Do you require partner organizations to have a bank account in its name?')).toBeVisible();
  await expect(page.getByText('Yes').nth(2)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(2)).toBeVisible();
  await expect(page.getByText('Do you require partner').nth(2)).toBeVisible();
  await expect(page.getByText('Yes').nth(3)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(3)).toBeVisible();
  await expect(page.getByText('Do you require partner organizations to be registered?')).toBeVisible();
  await expect(page.getByText('Yes').nth(4)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(4)).toBeVisible();
  await expect(page.getByText('Which country of registration?')).toBeVisible();


 // view on click
 await expect(page.getByText('Which country of registration?')).toBeVisible();
  await page.getByRole('button', { name: 'Edit Edit' }).nth(3).click();
  await expect(page.locator('h6')).toBeVisible();
  await expect(page.locator('#dialog_0').getByRole('heading', { name: 'Partnership Requirements' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByText('Do you require partner').nth(4)).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).first()).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'No' }).first()).toBeVisible();
  await expect(page.getByText('Do you require partner organizations to have a bank account in its name?*')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(1)).toBeVisible();
  await page.locator('#req_question_15_option_34').check();
  await expect(page.locator('div').filter({ hasText: /^No$/ }).nth(1)).toBeVisible();
  await expect(page.getByText('Do you require partner organizations to have a Board?*').nth(1)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Yes$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^No$/ }).nth(2)).toBeVisible();
  await page.locator('#req_question_16_option_36').check();
  await expect(page.getByText('Do you require partner organizations to be registered?*')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Yes$/ }).nth(3)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^No$/ }).nth(3)).toBeVisible();
  await expect(page.getByText('Which country of registration?*')).toBeVisible();
 // await expect(page.getByRole('button', { name: 'Bahamas Delete Bangladesh' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
}