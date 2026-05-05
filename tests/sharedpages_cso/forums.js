
import { test, expect } from '@playwright/test';

export async function the_forumsed ( page ) {

  await page.getByRole('link', { name: 'My Profile' }).click();

  await expect(page.getByRole('heading', { name: 'Forums' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('link', { name: ' Add forum' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'View all forums' })).toBeVisible();
  await page.getByRole('link', { name: ' Add forum' }).click();
  await expect(page.getByRole('heading', { name: 'Forums', exact: true })).toBeVisible({ timeout: 90000 });
  await expect(page.getByText('Kuja forums offer a platform')).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search Forums...' })).toBeVisible();
  await expect(page.getByText('Sort by:Newest to')).toBeVisible();
  await expect(page.locator('a').filter({ hasText: /^All Forums$/ })).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'My Forums' })).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Forums I\'ve joined' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Filter by Focus Areas ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Filter By Main Language ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create a forum' })).toBeVisible();




  
    // forum creation
    await page.getByRole('button', { name: 'Create a forum' }).click({ timeout: 90000 });
  await expect(page.getByText('Forum Title')).toBeVisible({ timeout: 90000 });
  await page.getByRole('textbox', { name: 'Forum Title Main Language' }).click();
  await page.getByRole('textbox', { name: 'Forum Title Main Language' }).fill('Automated test forum');
const descriptionField = page.getByRole('dialog').getByRole('textbox').nth(1);
await descriptionField.fill('test forum in automated way');
  
  await expect(page.getByText('Image')).toBeVisible();
  await expect(page.getByText('Choose file')).toBeVisible();
  await expect(page.getByText('No file chosen')).toBeVisible();
  await expect(page.getByText('Privacy', { exact: true })).toBeVisible();

  await expect(page.locator('#dialog_0').getByText('Private')).toBeVisible();
  await page.getByRole('radio', { name: 'Private' }).check();
  await expect(page.getByText('New members need to be')).toBeVisible();
  await expect(page.getByText('Public', { exact: true })).toBeVisible();
  await expect(page.getByText('Anyone can join the forum.')).toBeVisible();
  await expect(page.getByText('Engagement')).toBeVisible();
  await expect(page.getByText('Everyone')).toBeVisible();
  await page.getByRole('radio', { name: 'Everyone' }).check();
  await expect(page.getByText('All members can post a topic.')).toBeVisible();
  await expect(page.getByText('Admin only')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Admin only' })).toBeVisible();
  await expect(page.getByText('Only the admin can post a')).toBeVisible();
  await expect(page.getByText('Main Language', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select Main Language ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select Main Language ' }).click();
  await page.getByRole('menuitem', { name: 'English (US)' }).click();
  await expect(page.getByText('Focus Areas', { exact: true })).toBeVisible();
  await expect(page.getByText('Optional')).toBeVisible();
  await page.locator('form').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('menuitem', { name: 'Animal Rights' }).click();



  await expect(page.getByText('Does this forum have sub-')).toBeVisible();
  await expect(page.getByText('Sub-forums let you divide the')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Yes, allow sub-forums$/ }).first()).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Yes, allow sub-forums' })).toBeVisible();
  await expect(page.getByText('Yes, allow sub-forums')).toBeVisible();
  await page.locator('div').filter({ hasText: /^No, this will be a standalone forum$/ }).first().click();
  await expect(page.getByRole('radio', { name: 'No, this will be a standalone' })).toBeVisible();
  await expect(page.getByText('No, this will be a standalone')).toBeVisible();
  await page.getByRole('radio', { name: 'Yes, allow sub-forums' }).check();
  await page.getByRole('radio', { name: 'No, this will be a standalone' }).check();
  await expect(page.locator('a').filter({ hasText: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();


  //View Saved Forums
  await expect(page.getByRole('link', { name: 'Forum Topics' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('link', { name: 'Pending Approvals' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Members' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About Forum' })).toBeVisible();
  await expect(page.locator('#wrap').getByRole('link', { name: 'Forums' })).toBeVisible();
  await expect(page.locator('.col-9 > .card > .card-body > .row.g-4')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Automated test forum' })).toBeVisible();

  //await expect(page.getByText('Recent activity 1 minute ago').nth(1)).toBeVisible();
  await expect(page.getByText('test forum in automated way').nth(1)).toBeVisible();
  await expect(page.getByText('By:').nth(1)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Contribute with a topic' })).toBeVisible();
  await expect(page.getByRole('combobox')).toBeVisible();
  await expect(page.getByRole('button', { name: 'My Forum' })).toBeVisible();
  await expect(page.locator('.col-9 > .card > .card-body > .row.g-4 > .col-md-9 > div > .d-none > .d-flex > .me-2.kc-hoverable.share-forum > img')).toBeVisible();
  await page.getByRole('combobox').selectOption('oldest');
  await page.goto('https://kuja.org/communities/automated-test-forum-45/topics#sort_topics=oldest');
 // await page.locator('.col-9 > .card > .card-body > .row.g-4 > .col-md-9 > div > .d-none > .d-flex > div > a').click();
  //await page.getByText('Cancel').nth(1).click();

  //Topic contribution for a forum
  await page.getByRole('button', { name: 'Contribute with a topic' }).click();
  await expect(page.getByRole('heading', { name: 'Contribute with a topic' })).toBeVisible();
  await expect(page.getByText('Title')).toBeVisible();
  await page.getByRole('textbox', { name: 'Title Description' }).click();
  await page.getByRole('textbox', { name: 'Title Description' }).fill('Automated topic contribution');
  await expect(page.getByText('Description')).toBeVisible();
  await page.locator('textarea').click();
  await page.locator('textarea').fill('autimated countribution for forum');
  await expect(page.locator('.d-none > .mt-1 > div > img').first()).toBeVisible();
  await expect(page.locator('.d-none > .mt-1 > div:nth-child(2) > img')).toBeVisible();
  await expect(page.locator('.d-none > .mt-1 > div:nth-child(3) > img')).toBeVisible();
  await expect(page.getByRole('switch', { name: 'Do you want a poll for this' })).toBeVisible();

  //poll adition
  await expect(page.getByText('Do you want a poll for this')).toBeVisible();
  await expect(page.getByText('Add a poll to let')).toBeVisible();
  await page.getByRole('switch', { name: 'Do you want a poll for this' }).check();
  await expect(page.getByText('Ask a question')).toBeVisible();
  await page.getByRole('textbox', { name: 'Ask a question' }).click();
  await page.getByRole('textbox', { name: 'Ask a question' }).fill('automated poll question');
  await expect(page.getByRole('button', { name: 'Add an option' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add an option' })).toBeVisible();
  await page.getByRole('button', { name: 'Add an option' }).click();
  await expect(page.getByText('Option 1')).toBeVisible();
  await page.getByRole('textbox', { name: 'Write Option' }).click();
  await page.getByRole('textbox', { name: 'Write Option' }).fill('option 1');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Write Option' }).fill('automated option 1');
  await page.getByRole('button', { name: 'Add an option' }).click();
  await expect(page.getByText('Option 2')).toBeVisible();
  await page.getByRole('textbox', { name: 'Write Option' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Write Option' }).nth(1).fill('automated  option 2');
  await expect(page.getByRole('contentinfo').filter({ hasText: 'CancelSave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click({ timeout: 5000 });


  
// //Confirm topic created 
// await expect(page.locator('.col-9 > .card.rounded-4')).toBeVisible();
//   await expect(page.locator('div').filter({ hasText: /^Automated topic contribution$/ }).nth(3)).toBeVisible();
//   await expect(page.getByRole('paragraph').filter({ hasText: 'Recent activity 1 minute ago' })).toBeVisible();
//   await expect(page.getByRole('paragraph').filter({ hasText: 'autimated countribution for' })).toBeVisible();
//   await expect(page.locator('div').filter({ hasText: /^Contribute to this topic$/ }).nth(3)).toBeVisible();
//   await expect(page.locator('.col-9 > .card.rounded-4 > .kc-topic-card > div > .kc-topic-actions-wrapper > .mt-3 > .d-none > .row > .col.kc-hoverable')).toBeVisible();
//   await expect(page.locator('.col-9 > .card.rounded-4 > .kc-topic-card > div > .kc-topic-actions-wrapper > .mt-3 > .d-none > .row > .col.kc-hoverable > .me-2')).toBeVisible();
//   await expect(page.getByRole('link').filter({ hasText: /^$/ }).nth(1)).toBeVisible();
//   await expect(page.getByText('Likes (0)').nth(3)).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Share' })).toBeVisible();
//   await expect(page.getByRole('link').filter({ hasText: /^$/ }).first()).toBeVisible();
//   await expect(page.getByRole('link').filter({ hasText: /^$/ }).first()).toBeVisible();
//   await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
//   await page.getByText('Delete Topic').nth(1).click();
  

  //Delete forum
    await page1.locator('.col-9 > .card > .card-body > .row.g-4 > .col-md-9 > div > .d-none > .d-flex > div > a').click();
   await page.getByRole('button', { name: 'Delete' }).click();
  await page.locator('.col-9 > .card > .card-body > .row.g-4 > .col-md-9 > div > .d-none > .d-flex > div > a').click();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.goto('https://kuja.org/communities#sort_forums=newest&view_filter=mine');
}
