import { test, expect } from '@playwright/test';
import {loginwith_email_login} from '../loginsandsignup/individualogin.js';
//import {individual_userEmail} from '../lib/variables.js';
import {the_forumsed} from './forums.js';
import {the_projectsd} from './projects.js';


export async function userprofile_banners ( page ) {
  
    //call the function for login here 
 // await loginwith_email_login(page);


  await page.goto('/');
  await page.getByRole('link', { name: 'My Profile' }).click();
  await expect(page.getByRole('link', { name: 'My Profile' })).toBeVisible({ timeout: 30000 });
  await expect(page.getByRole('img', { name: 'Loading...' })).toBeHidden();
  await expect(page.getByRole('img', { name: 'Profile avatar' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Profile Banner' })).toBeVisible();
  await page.getByRole('img', { name: 'Edit Banner' }).click();
  await page.getByRole('img', { name: 'Edit Avatar' }).click();
  await page.getByRole('img', { name: 'Delete Avatar' }).click();
  await page.getByRole('img', { name: 'Delete Banner' }).click();

  await expect(page.getByRole('img', { name: 'Country flag' }).first()).toBeVisible();
  //await expect(page.getByRole('link', { name: individual_userEmail })).toBeVisible();
  //await expect(page.getByText('This information is public')).toBeVisible();
    await expect(page.getByText('This information is public', { exact: true })).toBeVisible();



}


   export async function userprofile_about_who_are_we ( page ) {

   await page.getByRole('link', { name: 'My Profile' }).click({ timeout: 90000 });
   
  await expect(page.getByRole('heading', { name: 'Who we are' })).toBeVisible();

 // await expect(page.getByText('Who we are Edit Mission')).toBeVisible();
 // await expect(page.getByText('Who we are Edit')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Edit' }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Edit Edit' }).first().click();
  await expect(page.getByText('Share what drives your')).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('Mission statement')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Mission statement' })).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('About your organization')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'About your organization' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Additional Information' })).toBeVisible();
  await expect(page.getByText('Profile of your organization')).toBeVisible();

  await expect(page.getByRole('checkbox', { name: 'Indigenous-led' })).toBeVisible();
  await expect(page.getByText('Indigenous-led')).toBeVisible();

  const dialog = page.getByRole('dialog'); 
  await page.getByRole('checkbox', { name: 'LGBTQ+ - led' }).check();
  await expect(dialog.getByRole('checkbox', { name: 'LGBTQ+ - led' })).toBeChecked();


 const dialogfillin = page.getByRole('dialog'); 
  await dialogfillin.getByRole('checkbox', { name: 'Other (fill in)' }).check();
  await expect(dialogfillin.getByText('Other (fill in)')).toBeVisible();
  await expect(dialogfillin.getByRole('checkbox', { name: 'Other (fill in)' })).toBeChecked();


  // ... existing code ...
await page.getByRole('checkbox', { name: 'Refugee-led' }).check();
await expect(dialog.getByText('Refugee-led')).toBeVisible();
await page.getByRole('checkbox', { name: 'Women-led' }).uncheck();


  await expect(page.getByRole('checkbox', { name: 'Youth-led' })).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('Youth-led')).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Socials' })).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Socials' })).toBeVisible();

  await expect(page.getByText('Optional')).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add social links' })).toBeVisible();

  await page.getByRole('button', { name: ' Add social links' }).click();
  await expect(page.locator('#socialPlatform')).toBeVisible();

  await expect(page.getByRole('textbox', { name: '/example' })).toBeVisible();
  await expect(page.locator('#dialog_0').getByRole('button', { name: 'Add', exact: true })).toBeVisible();
  await page.locator('#socialPlatform').selectOption('1');
  await page.locator('#socialPlatform').selectOption('2');
  await page.locator('#socialPlatform').selectOption('3');
  await page.locator('#socialPlatform').selectOption('4');
  await page.locator('#socialPlatform').selectOption('5');
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();

}


export async function the_forumse ( page ) {
  await the_forumsed(page);
}

export async function the_projectse ( page ) {
    await the_projectsd(page);
}