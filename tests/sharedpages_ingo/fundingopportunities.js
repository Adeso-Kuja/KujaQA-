import { test, expect } from '@playwright/test';

export async function funding_opportunities ( page ) {
    await page.getByRole('link', { name: 'My Profile' }).click({ timeout: 90000 });
 // await expect(page.getByRole('heading', { name: 'Funding Opportunities' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Loading...' })).toBeHidden({ timeout: 60000 });
  await expect(page.getByRole('heading', { name: 'Funding Opportunities' })).toBeVisible({ timeout: 60000 });
   // await expect(page.getByRole('heading', { name: 'Funding Opportunities' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Current funding opportunities' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Past funding opportunities' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Manage opportunities' })).toBeVisible();
  await page.getByRole('button', { name: ' Manage opportunities' }).click();
  await page.getByRole('button', { name: ' Create a funding opportunity' }).click();

   //first page of creation
  await expect(page.getByRole('heading', { name: 'Add a Funding Opportunity' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('heading', { name: 'STEP 1/' })).toBeVisible({ timeout: 30000 });
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Tell us about your opportunity' })).toBeVisible();

  await expect(page.getByText('Application link')).toBeVisible();
  await page.getByRole('textbox', { name: 'https://' }).click();
  await page.getByRole('textbox', { name: 'https://' }).fill('https://testautomation.com');
  await expect(page.getByText('Title *')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter opportunity title' }).click();
  await page.getByRole('textbox', { name: 'Enter opportunity title' }).fill('Test automation funding opportunity');
  await expect(page.getByText('Description *')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter opportunity description' }).click();
  await page.getByRole('textbox', { name: 'Enter opportunity description' }).fill('Test automation descriptions');
  await expect(page.getByText('Is this opportunity currently')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Yes$/ }).first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^No$/ }).first()).toBeVisible();
  await page.locator('#fo_active_yes').check();
  await expect(page.getByText('Eligibility *')).toBeVisible();
  await page.getByRole('textbox', { name: 'Describe eligibility criteria' }).click();
  await page.getByRole('textbox', { name: 'Describe eligibility criteria' }).fill('Eligible Automation Test');
  await expect(page.getByText('Countries *')).toBeVisible();
  await page.getByRole('button', { name: 'Select an option ' }).click();
  await page.getByRole('menuitem', { name: 'Angola' }).click();
  await expect(page.getByText('Do you have a set budget? *')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Yes$/ }).nth(1)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^No$/ }).nth(1)).toBeVisible();
  await page.locator('#fo_budget_yes').check();
  await expect(page.getByText('Budget *')).toBeVisible();
  await page.getByRole('button', { name: 'Select currency ' }).click();
  await page.getByRole('menuitem', { name: 'ANG (ƒ)' }).click();
  await page.getByRole('textbox', { name: '0.00' }).click();
  await page.getByRole('textbox', { name: '0.00' }).fill('500000');
  await expect(page.getByText('Deadline (Optional)')).toBeVisible();
  await page.locator('input[type="date"]').fill('2026-12-31');
  await expect(page.getByRole('button', { name: ' Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next, add a focus area' })).toBeVisible();
  await page.getByRole('button', { name: 'Next, add a focus area' }).click();
// 2nd page of creation

await expect(page.getByRole('heading', { name: 'Add a Funding Opportunity' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEP 2/' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Let others know the key areas' })).toBeVisible();
  await expect(page.getByText('Selecting focus areas that')).toBeVisible();
  await expect(page.getByText('Focus area (Optional)')).toBeVisible();
  await page.getByRole('button', { name: 'Select a category ' }).click();
  await page.getByText('Children & Youth').click();
  await expect(page.getByText('Narrow down your selection')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select specific focus areas ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select specific focus areas ' }).click({ timeout: 90000 });
 //await page.getByText('Child Nutrition').click({ timeout: 90000 });
  await page.getByRole('menuitem', { name: 'Child Nutrition' }).click({ timeout: 90000 });
  await page.getByRole('button', { name: ' Add a focus area' }).click({ timeout: 10000 });
  await expect(page.getByRole('button', { name: 'Create Opportunity' })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('button', { name: ' Back' })).toBeVisible();
  await page.getByRole('button', { name: 'Create Opportunity' }).click();

}