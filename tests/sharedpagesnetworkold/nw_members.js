
import { test, expect } from '@playwright/test';

export async function members ( page ) {
await page.getByRole('menuitem', { name: 'Kujalink' }).click();
  await page.getByRole('link', { name: 'Members Kuja Members are' }).click({ timeout: 30000 });
  await expect(page.getByRole('heading', { name: 'Members' })).toBeVisible();
  await expect(page.getByText('Join Kuja to connect with')).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search profiles...' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Filter by' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();
  await expect(page.getByText('Type of user')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'All' })).toBeVisible();
  await expect(page.getByText('All', { exact: true })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Individual' })).toBeVisible();
  await expect(page.getByRole('complementary').getByText('Individual')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Network Organization' })).toBeVisible();
  await expect(page.getByText('Network Organization')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'CSO Organization' })).toBeVisible();
  await expect(page.getByText('CSO Organization')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'INGO/Donor' })).toBeVisible();
  await expect(page.getByText('INGO/Donor')).toBeVisible();
  await expect(page.getByText('Country', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select country ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select country ' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('Kenya');
  await page.getByRole('menuitem', { name: 'Kenya' }).click();
  await expect(page.getByText('Focus Area', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select focus areas ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select focus areas ' }).click();
  await page.getByText('Adult Welfare').nth(1).click();
  await page.getByRole('button', { name: 'Adult Welfare Delete ' }).getByLabel('Delete').click();
  await expect(page.getByText('Adeso KenyaAdvocacyCommunity')).toBeVisible();
  await expect(page.getByText('Sort by:')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sort by:' })).toBeVisible();
  await page.getByRole('button', { name: 'Sort by:' }).click();
  await page.getByText('Relevance').click();
  await page.locator('li:nth-child(7) > .page-link').click();
}