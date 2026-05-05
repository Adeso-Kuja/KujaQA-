
import { test, expect } from '@playwright/test';

export async function unlockfullpotential ( page ) {
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'My Profile' }).click();
  //await page.getByText('Unlock your profile full potential Help us keep our community safe and secure.').click();
 //await expect(page.getByText('Help us keep our community')).toBeVisible();
  await expect(page.getByText('Unlock your profile full potential Help us keep our community safe and secure.')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Unlock your profile/i })).toBeVisible();
  await expect(page.getByText('Help us keep our community')).toBeVisible();
  await expect(page.getByText('Complete your profile')).toBeVisible();
  await expect(page.getByText(/\d+% complete/)).toBeVisible();
}