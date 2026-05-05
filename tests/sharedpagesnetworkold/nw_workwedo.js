import { expect } from '@playwright/test';

export async function workwedo ( page ) {
     await page.getByRole('link', { name: 'My Profile' }).click();
    await expect(page.getByRole('heading', { name: 'Work we do' })).toBeVisible();
  await expect(page.getByText('Sustainable Development Goals')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Add the SDGs you promote' })).toBeVisible();
  await expect(page.getByText('Focused on')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Add your focus area' })).toBeVisible();
  await expect(page.getByText('Target community')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Add the communities you' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Add the SDGs you promote' }).click();
  await expect(page.getByRole('heading', { name: 'SDGs You Promote' })).toBeVisible();
  await expect(page.getByText('Add SDGs you promote')).toBeVisible();
  await expect(page.locator('.o_select_menu_toggler')).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add SDG' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
}