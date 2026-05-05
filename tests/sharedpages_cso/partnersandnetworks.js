import { test, expect } from '@playwright/test';


export async function partnersandnetworks ( page ) {
  await page.waitForTimeout(3000);
await page.getByRole('link', { name: 'My Profile' }).click();

  await expect(page.getByRole('heading', { name: /Partners & Networks/i })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Add Add partner or network' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'View all partners & networks' })).toBeVisible();
  await expect(page.getByText('No partners or networks to')).toBeVisible();
  await expect(page.getByText('Partners & NetworksAdd partner or networkView all partners & networksNo')).toBeVisible();
}


