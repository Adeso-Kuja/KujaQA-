import {  expect } from '@playwright/test';
export async function dm_chat ( page ) {

 // await page.locator('owl-component a').click();
 await page.locator('xpath=/html/body/div[1]/header/nav[1]/div/ul[2]/div/div/owl-component/div/a').click();
  await page.getByRole('tab', { name: 'Chats', exact: true }).click();
  await page.getByRole('tab', { name: 'Blocked/Reported Chats' }).click();
  await page.getByRole('button', { name: 'New Message' }).click();
  await expect(page.locator('.fa.fa-pencil')).toBeVisible();
  await expect(page.getByText('New message')).toBeVisible();
  await expect(page.getByText('To :')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Start a conversation' })).toBeVisible();
  //await expect(page.getByTitle('Close Chat Window (ESC)')).toBeVisible();
  //await page.locator('.fa.fa-pencil').click();
  await page.getByRole('textbox', { name: 'Start a conversation' }).click();
  await page.getByRole('textbox', { name: 'Start a conversation' }).fill('wa');
  await page.getByRole('button', { name: 'User is offline Cyrus Waithaka' }).click();
  await expect(page.getByText('😶')).toBeVisible();
  await expect(page.getByText('The conversation is empty.')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Message Cyrus Waithaka…' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Emojis' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Attach files' })).toBeVisible();
  await expect(page.getByTitle('Fold')).toBeVisible();
  //await page.getByRole('button', { name: 'User is offline Cyrus Waithaka' }).click();
  await page.getByRole('button', { name: 'Thread Image  Cyrus Waithaka' }).click();
  await page.getByText('Block User').click();



  await expect(page.getByText('Are you sure you want to')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Block' })).toBeVisible();
  await expect(page.getByTitle('Close panel')).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Thread Image  Cyrus Waithaka' }).click();
  await page.getByRole('menuitem', { name: ' Report User' }).click();
  await expect(page.getByRole('heading', { name: 'Report this message' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByText('Help us keep our community')).toBeVisible();
  await expect(page.getByText('Your report is anonymous and')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.locator('xpath=/html/body/div[1]/header/nav[1]/div/ul[2]/div/div/owl-component/div/a').click();
 
  await page.getByRole('button', { name: 'New Message' }).click({ timeout: 90000 });
  await page.getByRole('textbox', { name: 'Start a conversation' }).fill('cyr');
  await page.getByRole('button', { name: 'User is offline Cyrus Waithaka' }).click({ timeout: 90000 });
  await page.getByRole('button', { name: 'Thread Image  Cyrus Waithaka' }).click({ timeout: 90000 });
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: ' View Profile' }).click({ timeout: 90000 });
  const page1 = await page1Promise;


}