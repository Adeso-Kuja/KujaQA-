
import { test, expect } from '@playwright/test';
export async function grants ( page ) {
await page.getByRole('menuitem', { name: 'Kujalink' }).click({ timeout: 30000 });
  await page.getByRole('link', { name: 'Grants Grants on Kuja connect' }).click();
  await expect(page.getByRole('heading', { name: 'Grant feed' })).toBeVisible();
  await expect(page.getByText('Explore the following open')).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search Grants...' })).toBeVisible();
  await expect(page.getByText('My saved Grants (0)')).toBeVisible();
  await expect(page.getByText('Sort by:')).toBeVisible();
  await expect(page.getByRole('button').filter({ hasText: /^$/ }).nth(1)).toBeVisible();
  await expect(page.getByText('Filter byClear AllClosing')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();
  await expect(page.getByRole('complementary').getByText('Closing soon')).toBeVisible();
  await expect(page.getByText('Show expired')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Focus Area ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select focus areas ' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Region ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select region ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select region ' }).click();
  await page.getByText('World / Africa', { exact: true }).click();
  await page.getByRole('button', { name: 'Select focus areas ' }).click();
  await page.getByText('Adult Welfare').nth(1).click();
  await expect(page.getByRole('heading', { name: 'Language ' })).toBeVisible();
  await page.getByRole('button', { name: 'Original Language ' }).click();
  await page.getByRole('menuitem', { name: 'English (US)' }).click();
  await page.getByRole('button', { name: 'Allowed Languages ' }).click();
  await page.getByText('English (US)').nth(5).click();
  await expect(page.getByRole('heading', { name: 'Deadline ' })).toBeVisible({ timeout: 90000 });
  await page.getByRole('textbox').click({ timeout: 90000 });
  await page.locator('owl-component').filter({ hasText: 'Grant feedExplore the' }).click();
  await expect(page.getByRole('heading', { name: 'Grant funding amount (USD) ' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Any amount (0)' })).toBeVisible();
  await expect(page.getByText('Any amount (0)')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Maximum $100K (0)' })).toBeVisible();
  await expect(page.getByText('Maximum $100K (0)')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Maximum $500K (0)' })).toBeVisible();
  await expect(page.getByText('Maximum $500K (0)')).toBeVisible();
  await expect(page.getByRole('radio', { name: '$500K+ (0)' })).toBeVisible();
  await expect(page.getByText('$500K+ (0)')).toBeVisible();
  await expect(page.getByText('Custom (0)')).toBeVisible();
}




export async function grants_learn_more ( page ) {
 await page.getByRole('menuitem', { name: 'Kujalink' }).click({ timeout: 30000 });
 
  await page.getByRole('link', { name: 'Grants Grants on Kuja connect' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Learn more about this grant ' }).first().click();
  const page1 = await page1Promise;

  await expect(page1.getByRole('link', { name: 'All Grants' })).toBeVisible();
  await expect(page1.locator('.o_wevent_sidebar_block').first()).toBeVisible();
  await expect(page1.getByText('Focus Areas')).toBeVisible();
  await expect(page1.getByText('Deadline')).toBeVisible();
  await expect(page1.locator('.card.bg-transparent.d-flex.align-items-end')).toBeVisible();
  await expect(page1.getByText('Location')).toBeVisible();
  await expect(page1.getByText('Budget')).toBeVisible();
  await expect(page1.getByRole('link', { name: 'Learn more about this grant ' })).toBeVisible();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Learn more about this grant ' }).click();
  const page2 = await page2Promise;



}



