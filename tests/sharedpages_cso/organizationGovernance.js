
import { test, expect } from '@playwright/test';

export async function organizationgovernance_view ( page ) {

   await page.getByRole('link', { name: 'My Profile' }).click();
  await expect(page.getByRole('heading', { name: 'Organisation governance' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Edit' }).nth(2)).toBeVisible();
  await expect(page.getByText('Does your organization have a bank account in its name?')).toBeVisible();
  await expect(page.getByText('Yes').first()).toBeVisible();
  await expect(page.getByText('No').nth(5)).toBeVisible();
  await expect(page.getByText('Does your organization have a Board?')).toBeVisible();
  await expect(page.getByText('Yes').nth(1)).toBeVisible();
  await expect(page.getByText('Yes').nth(1)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(1)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Does your organization have' })).toBeVisible();
  await expect(page.getByText('Code of Conduct?')).toBeVisible();
  await expect(page.getByText('Yes').nth(2)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(2)).toBeVisible();
  await expect(page.getByText('Protection of Sexual')).toBeVisible();
  await expect(page.getByText('Yes').nth(3)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(3)).toBeVisible();
  await expect(page.getByText('Anti-Harassment and/or')).toBeVisible();
  await expect(page.getByText('Yes').nth(4)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(4)).toBeVisible();
  await expect(page.getByText('Data Protection or Privacy?')).toBeVisible();
  await expect(page.getByText('Yes').nth(5)).toBeVisible();
  await expect(page.getByText('No', { exact: true }).nth(5)).toBeVisible();
  await expect(page.getByText('Anti-Fraud and/or Anti-')).toBeVisible();
  await expect(page.locator('div:nth-child(15) > .d-flex > span').first()).toBeVisible();
  await expect(page.locator('.col-12.col-lg-5')).toBeVisible();
  await page.locator('.col-12.col-lg-5').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await expect(page.locator('div:nth-child(15) > .d-flex > span').first()).toBeVisible();
  await expect(page.locator('div:nth-child(15) > .d-flex > .d-inline-flex.align-items-center.gap-1.text-muted')).toBeVisible();
  await expect(page.getByText('Child Protection?')).toBeVisible({ timeout: 90000 });
//   await expect(page.locator('div:nth-child(16) > .d-flex > span').first()).toBeVisible({ timeout: 90000 });
//     await expect(page1.locator('div:nth-child(15) > .d-flex')).toBeVisible();

try {
  // Try the first specific locator
  await expect(page.locator('div:nth-child(16) > .d-flex > span').first())
    .toBeVisible({ timeout: 10000 }); // Reduced timeout so you aren't waiting 90s just to fail
  
  console.log("Found the first locator (nth-child 16)");

} catch (error) {
  console.log("First locator not found, checking the second one...");
  
  // Fallback: Try the second locator on page1
  await expect(page1.locator('div:nth-child(15) > .d-flex'))
    .toBeVisible({ timeout: 90000 });
    
  console.log("Found the second locator (nth-child 15)");
}

 // await expect(page.locator('div:nth-child(16) > .d-flex > .d-inline-flex.align-items-center.gap-1.text-muted')).toBeVisible();
}


export async function organizationgovernance_edit ( page ) {

   await page.getByRole('link', { name: 'My Profile' }).click();
   await page.waitForTimeout(9000);
//    await page.getByRole('button', { name: 'Edit Edit' }).nth(2).click({ timeout: 90000 });
//   await page1.getByRole('button', { name: 'Edit Edit' }).nth(4).click({ timeout: 90000 });

try {
  // Try the first button
  await page.getByRole('button', { name: 'Edit Edit' }).nth(2).click({ timeout: 90000 });
} catch (error) {
  console.log('First button not found, trying the second one...');
  // Fallback to the second button
  await page1.getByRole('button', { name: 'Edit Edit' }).nth(4).click({ timeout: 90000 });
}

  await expect(page.getByRole('heading', { name: 'Governance & Compliance' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('heading', { name: 'Organization Compliance &' })).toBeVisible({ timeout: 90000 });



  await expect(page.getByText('Does your organization have a bank account in its name?*')).toBeVisible();
  await expect(page.locator('#question_1_option_1')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).first()).toBeVisible();
  await expect(page.getByText('Does your organization have a Board?*')).toBeVisible();
  await page.locator('#question_2_option_3').check();
  await page.getByRole('button', { name: 'Next' }).click({ timeout: 90000 });
  await expect(page.locator('h6')).toBeVisible({ timeout: 90000 });
  await expect(page.getByText('Code of Conduct?*')).toBeVisible();
  await expect(page.locator('#question_3_option_5')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).first()).toBeVisible();
  await page.locator('#question_3_option_5').check();
  await expect(page.getByText('Protection of Sexual Exploitation and Abuse / Safeguarding policy?*')).toBeVisible();
  await page.locator('#question_4_option_7').check();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(1)).toBeVisible();
  await expect(page.getByText('Anti-Harassment and/or Discrimination?*')).toBeVisible();
  await expect(page.locator('#question_5_option_9')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(2)).toBeVisible();
  await page.locator('#question_5_option_9').check();
  await expect(page.getByText('Data Protection or Privacy?*')).toBeVisible();
  await expect(page.locator('#question_6_option_11')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(3)).toBeVisible();
  await expect(page.getByText('Anti-Fraud and/or Anti-Bribery?*')).toBeVisible({ timeout: 90000 });
  await expect(page.locator('#question_7_option_13')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(4)).toBeVisible();
  await expect(page.locator('#question_8_option_15')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(5)).toBeVisible();
  await expect(page.getByText('Child Protection?*')).toBeVisible();
  await expect(page.locator('#question_8_option_15')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' }).nth(5)).toBeVisible();
  await expect(page.getByRole('button', { name: ' Back' })).toBeVisible();
  await expect(page.getByRole('contentinfo').filter({ hasText: 'Back Save Changes' })).toBeVisible();
  await page.getByRole('button', { name: 'Save Changes' }).click();
}