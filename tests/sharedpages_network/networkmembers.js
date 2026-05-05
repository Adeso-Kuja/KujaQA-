import { test, expect } from '@playwright/test';

export async function networkmembers ( page ) {
    

  await page.getByRole('link', { name: 'My Profile' }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByRole('heading', { name: 'Network Members' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Add Add a network member' })).toBeVisible();
  await expect(page.getByText('No network members to display')).toBeVisible();
  await expect(page.getByText('Add a network memberView all')).toBeVisible();
  await page.getByRole('button', { name: 'View all network members' }).click();
  await expect(page.getByText('No network members to display')).toBeVisible();
  await page.getByRole('link', { name: 'Add Add a network member' }).click({ timeout: 30000 });
  await expect(page.getByRole('heading', { name: 'Add a network member' })).toBeVisible({ timeout: 30000 });
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search for organization ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Member' })).toBeVisible();

  

}


