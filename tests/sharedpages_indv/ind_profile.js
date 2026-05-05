
import { test, expect } from '@playwright/test';

export async function profile_bio ( page ) {
  await page.getByRole('link', { name: 'My Profile' }).click();
//   await page.waitForTimeout(9000);
//   await expect(page.getByText('This is a public profile')).toBeVisible();
    const publicProfileText = page.getByText(/this is a public profile/i);
  await expect(publicProfileText).toBeVisible({ timeout: 15000 });

  await expect(page.getByRole('img', { name: 'Edit' }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Bio$/ })).toBeVisible();
  await expect(page.locator('.content-wrapper > div > .icon').first()).toBeVisible();
  await page.locator('.content-wrapper > div > .icon').first().click({ timeout: 15000 });
   await page.waitForTimeout(9000);
  // await expect(page.locator('h4')).toBeVisible();
  // await expect(page.getByRole('heading', { name: 'Bio', level: 4 })).toBeVisible();
     await expect(page.locator('h4')).toBeVisible({ timeout: 15000 });

  await expect(page.locator('label')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByText('Cancel')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();

}


export async function profile_social ( page ) {
  await page.getByRole('link', { name: 'My Profile' }).click();
  await expect(page.locator('div').filter({ hasText: /^Socials$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .content-wrapper > div > .icon').first()).toBeVisible();
  await page.locator('div:nth-child(3) > .content-wrapper > div > .icon').first().click();

  const socialHeading = page.getByText(/share your social media links/i);
  await expect(socialHeading).toBeVisible({ timeout: 15000 });

  // 3. Chain existing assertions
  await expect(page.getByText(/attach links to your/i)).toBeVisible();
  await expect(page.getByText('Facebook')).toBeVisible();
  
  // Best practice: ensure the input is editable or visible before interacting
  await expect(page.locator('#socialPlatformLink1')).toBeVisible();
  await expect(page.getByText('X', { exact: true })).toBeVisible();
  await expect(page.locator('#socialPlatformLink2')).toBeVisible();
  await expect(page.getByText('LinkedIn')).toBeVisible();
  await expect(page.locator('#socialPlatformLink3')).toBeVisible();
  await expect(page.getByText('Instagram')).toBeVisible();
  await expect(page.locator('#socialPlatformLink4')).toBeVisible();
  await expect(page.getByText('Youtube')).toBeVisible();
  await expect(page.locator('#socialPlatformLink5')).toBeVisible();
  await expect(page.getByText('Global Living')).toBeVisible();
  await expect(page.locator('#socialPlatformLink6')).toBeVisible();
  await expect(page.getByText('Epic Africa')).toBeVisible();
  await expect(page.locator('#socialPlatformLink7')).toBeVisible();
  await expect(page.getByText('Talk to Loop')).toBeVisible();
  await expect(page.locator('#socialPlatformLink8')).toBeVisible();
  await expect(page.getByText('Resource Alliance')).toBeVisible();
  await expect(page.locator('#socialPlatformLink9')).toBeVisible();
  await expect(page.getByText('Cancel')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();

}


export async function profile_focus_areas ( page ) {
  await page.getByRole('link', { name: 'My Profile' }).click();
  await page.waitForTimeout(9000);
  await expect(page.getByRole('heading', { name: 'Focus Areas' })).toBeVisible();
  await page.locator('div:nth-child(2) > .section-content > .content-wrapper > div > .icon').click();
  await expect(page.getByRole('heading', { name: 'Focus Area', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByText('Cancel')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
}



export async function profile_Skills ( page ) {
  await page.getByRole('link', { name: 'My Profile' }).click();
  await page.waitForTimeout(9000);
 await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
  await expect(page.locator('div:nth-child(3) > div > .content-wrapper > div > .icon')).toBeVisible();
  await page.locator('div:nth-child(3) > div > .content-wrapper > div > .icon').click();
  await expect(page.locator('h4')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Administrative Delete Crisis' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
 await expect(page.getByText('SkillsAdministrativeCrisis')).toBeVisible();

  }


export async function profile_Languages( page ) {
    await page.getByRole('link', { name: 'My Profile' }).click();
  await page.waitForTimeout(9000);
 await page.getByRole('heading', { name: 'Languages' }).click();
  await expect(page.getByRole('heading', { name: 'Languages' })).toBeVisible();
  await expect(page.getByText('English (US) - Elementary')).toBeVisible();
  await page.locator('.content-wrapper > div > div > img:nth-child(2)').click();
  await expect(page.getByRole('heading', { name: 'Edit Language' })).toBeVisible();
  await expect(page.getByText('Language', { exact: true })).toBeVisible();
  await page.getByText('Fluency Level').click();
  await expect(page.locator('#fluencySelect2')).toBeVisible();
  await expect(page.getByText('Cancel')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();

}

export async function profile_Roles( page ) {
    await page.getByRole('link', { name: 'My Profile' }).click();
  await page.waitForTimeout(9000);
await expect(page.getByRole('heading', { name: 'Role' })).toBeVisible();
  await page.locator('div:nth-child(4) > div > .content-wrapper > div > .icon').first().click();
  await expect(page.locator('h4')).toBeVisible();
  await expect(page.getByText('Select the role or title in')).toBeVisible();
  await expect(page.getByText('Complete this information to')).toBeVisible();
  await expect(page.getByText('My current role or title *')).toBeVisible();
  await expect(page.locator('#role')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
}


export async function profile_Affiliated( page ) {
    await page.getByRole('link', { name: 'My Profile' }).click();
  await page.waitForTimeout(9000);
 //await expect(page.getByRole('heading', { name: 'Affiliated', exact: true })).toBeVisible();
   await expect(page.getByRole('heading', { name: 'Affiliated organizations' })).toBeVisible({ timeout: 15000 });

  await expect(page.locator('div:nth-child(4) > div:nth-child(3) > .content-wrapper > div > .icon')).toBeVisible();
  await page.locator('div:nth-child(4) > div:nth-child(3) > .content-wrapper > div > .icon').click({ timeout: 15000 });
  await expect(page.getByRole('heading', { name: 'Affiliated', exact: true })).toBeVisible({ timeout: 15000 });
  await expect(page.getByText('I\'m not affiliated to an')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
}

export async function profile_burners( page ) {
  await page.getByRole('link', { name: 'My Profile' }).click();
  //await page.waitForTimeout(9000);
await expect(page.getByRole('img', { name: 'Kuja Learn' }).first()).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole('img', { name: 'Kuja Build' }).first()).toBeVisible({ timeout: 15000 });

}