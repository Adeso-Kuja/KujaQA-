import { test, expect } from '@playwright/test';

export async function profileSettings ( page,userData={} ) {

  const { userName, location } = userData;
   // Matching the snapshot name
  await page.waitForTimeout(3000);
    //await page.getByRole('button', { name: 'Walter Odhiambos' }).click();
    await page.getByRole('button', { name: new RegExp(userName, 'i') }).click();
    await page.waitForTimeout(3000);
  //await page.getByRole('menuitem', { name: ' Profile Settings' }).click();
  await page.getByRole('menuitem', { name: /Profile Settings/i }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByRole('heading', { name: 'My profile settings' })).toBeVisible();
  await page.waitForTimeout(3000);
  await expect(page.locator('a').filter({ hasText: 'Profile Preferences' })).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Visibility' })).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Notifications' })).toBeVisible();
  //await expect(page.getByText('Name and locationAlgeria')).toBeVisible();
  // if (location) {
  //       await expect(page.getByText(location)).toBeVisible();
  //   }
  await expect(page.getByText('Name and location')).toBeVisible();
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Email address$/ }).nth(1)).toBeVisible();
  await page.getByText('Email address').click();
  await expect(page.locator('div').filter({ hasText: /^Email address$/ }).nth(1)).toBeVisible();
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.getByText('Language preferenceEnglish (')).toBeVisible();
  await expect(page.getByText('Language preference')).toBeVisible();
  await expect(page.locator('.icon')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Delete your account' })).toBeVisible();
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('a').filter({ hasText: 'Visibility' }).click();
  await expect(page.getByRole('heading', { name: 'Profile Privacy' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Select the type of profile' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Public' })).toBeVisible();
  await expect(page.getByText('Public')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Private' })).toBeVisible();
  await expect(page.getByText('Private')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Who can contact you' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Who can find your profile and' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'All' })).toBeVisible();
  await expect(page.getByText('All', { exact: true })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Only the contacts of my' })).toBeVisible();
  await expect(page.getByText('Only the contacts of my')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Anyone who follows me' })).toBeVisible();
  await expect(page.getByText('Anyone who follows me')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Only personal profiles' })).toBeVisible();
  await expect(page.getByText('Only personal profiles')).toBeVisible();
  await expect(page.getByText('Who can contact youWho can')).toBeVisible();

}