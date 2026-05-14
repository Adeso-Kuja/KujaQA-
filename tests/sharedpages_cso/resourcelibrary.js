
import { test, expect } from '@playwright/test';

  export async function resource_library ( page ) {
  await page.getByRole('menuitem', { name: 'Kujalink' }).click();
  await page.waitForTimeout(9000);
  await page.getByRole('link', { name: 'Resource Library Easily' }).click();
    

  await expect(page.getByRole('heading', { name: 'Resource Library' })).toBeVisible({ timeout: 30000 });
  await expect(page.getByText('The resource center offers')).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search by title' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Type: All ' })).toBeVisible();
  await page.getByRole('button', { name: 'Type: All ' }).click();
  await page.getByRole('menuitem', { name: 'Blog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Creator: All ' }).click();
  await page.waitForTimeout(4000);
  //await page.getByText('International Non-Profit').click();

  await page.getByRole('button', { name: 'Focus areas ' }).click();
  await page.getByText('Adult Welfare').nth(1).click();
  await page.getByRole('button', { name: 'Sort: Newest to Oldest ' }).click();
  await page.getByText('Most popular (most clicks)').click();
  await page.getByRole('button', { name: 'Blog Delete ' }).getByLabel('Delete').click();
 // await page.getByRole('button', { name: 'International Non-Profit Repo' }).getByLabel('Delete').click();
  //await page.getByRole('link', { name: 'Delete' }).click();
  // Less recommended but works for simple lists
await page.getByRole('link', { name: 'Delete' }).first().click();
  await page.getByRole('button', { name: 'Most popular (most clicks)  ' }).click();
  //await page.getByText('View document hereAccess').click();
  //await expect(page.getByText('View document hereAccess')).toBeVisible();


  await page.getByRole('link', { name: 'Logo View tool kit here ' }).first().click();
  await expect(page.getByTitle('Courses')).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search courses' })).toBeVisible();
 
}