
import { expect } from '@playwright/test';

export async function userfeeds ( page ) {
  await page.getByRole('link', { name: 'Userfeed' }).click();

    //Left Menu-profile barner
 //await page.locator('.uf-profile-avatar').click();
 //  await expect(page.locator('.uf-profile-avatar')).toBeVisible({ timeout: 30000 });
   //div[@class='uf-profile-avatar-placeholder']
   const avatar = page.locator('//div[@class="uf-profile-avatar-placeholder"]');
  // This will wait until the element is visible
   await expect(avatar).toBeVisible({ timeout: 30000 });

  await expect(page.locator('.uf-promo-slide')).toBeVisible();

 

   //Left Menu-promotions
  await expect(page.locator('.uf-promo-slide')).toBeVisible();
  await expect(page.getByText('Create, manage, and launch')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Start Building arrow' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log into KujaBuild' })).toBeVisible();
  await expect(page.locator('.uf-section').first()).toBeVisible();

  //Right card top-Forums
  await expect(page.getByRole('heading', { name: 'Forums' })).toBeVisible();
  await expect(page.getByText('Engage with ongoing forum')).toBeVisible();
  await expect(page.getByRole('link', { name: 'View all' }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' }).first()).toBeVisible();
  //await expect(page.getByText('JoinPledge for Change')).toBeVisible();
  await expect(page.locator('.uf-section.uf-grants-section')).toBeVisible();

   //Right card medium-Grants
  await expect(page.getByRole('heading', { name: 'Newest Grants' })).toBeVisible();
  await expect(page.getByText('Access global funding')).toBeVisible();
  await expect(page.getByRole('link', { name: 'View all' }).nth(1)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Previous' }).nth(1)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' }).nth(1)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Featured Organisations' })).toBeVisible();
  await expect(page.getByText('Each month, we feature the 3')).toBeVisible();
  await expect(page.getByRole('link', { name: 'View all' }).nth(2)).toBeVisible();
  //await expect(page.getByText('Adeso OrganizationNairobi')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Previous' }).nth(2)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' }).nth(2)).toBeVisible();

   //Right card bottom-Projects
  await expect(page.getByRole('heading', { name: 'Projects by other' })).toBeVisible();
  await expect(page.getByText('View and learn from projects')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Previous' }).nth(3)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' }).nth(3)).toBeVisible();
}


