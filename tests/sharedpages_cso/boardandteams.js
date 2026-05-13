
import { expect } from '@playwright/test';

export async function boardandteams ( page ) {

  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'My Profile' }).click({ timeout: 10000 });

  //await page.waitForTimeout(3000);
 // await expect(page.getByRole('heading', { name: 'Board & Team Members' })).toBeVisible({ timeout: 10000 });
  const heading = page.getByRole('heading', { name: 'Board & Team Members' });
   await expect(heading).toBeVisible({ timeout: 15000 });

  //await expect(page.getByText('Walter Individual OdhiamboAdult WelfareFilmView profile')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Add Add team member' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'View all team members' })).toBeVisible();
  
   await page.getByRole('link', { name: 'Add Add team member' }).click({ timeout: 10000 });
   await page.waitForTimeout(3000);
  // await expect(page.getByRole('heading', { name: 'Add a team member' })).toBeVisible();
  // await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  // await expect(page.getByText('Search by name or email *')).toBeVisible();
  // await expect(page.getByRole('button', { name: 'Search by name or email ' })).toBeVisible();
  // await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  // await expect(page.getByRole('button', { name: 'Proceed' })).toBeVisible();
  // await expect(page.getByRole('button', { name: 'Proceed' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Team Members', exact: true })).toBeVisible();
  await expect(page.getByText('Invite your team members to')).toBeVisible();
  await expect(page.getByText('Add their email addresses,')).toBeVisible();
  await expect(page.getByText('Team member\'s email address *')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search by name or email ' })).toBeVisible();
  await expect(page.getByText('Enter emails separated by')).toBeVisible();
  await expect(page.getByText('Import your contact list')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download a template' })).toBeVisible();
  await expect(page.locator('.fa.fa-arrow-up')).toBeVisible();
  await expect(page.getByText('Drag-and-drop file, or browse')).toBeVisible();
  await expect(page.getByText('Allowed formats: CSV')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Role *')).toBeVisible();
  await expect(page.locator('#dialog_0').getByRole('combobox')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Member' })).toBeVisible();
}