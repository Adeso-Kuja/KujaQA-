import { test, expect } from '@playwright/test';

export async function about_us_landing ( page ) {
    //land on about us
 await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByText('Kuja is creating a reality').click();
  await expect(page.getByText('Kuja is creating a reality')).toBeVisible();
  await page.getByRole('link', { name: 'Register now arrow' }).click();
 

}

export async function about_us_what_can_kuja_do_for_you ( page ) {
    //What can Kuja do for you
    await page.goto('https://kuja.org/about-us');
 await expect(page.getByText('What can Kuja do for you?')).toBeVisible();
  await expect(page.locator('.container > .position-relative')).toBeVisible();
  await expect(page.getByText('The Kuja Story')).toBeVisible();
  await expect(page.getByText('Kuja was born from Adeso\'s')).toBeVisible();
  await expect(page.getByText('In response to these')).toBeVisible();
  await expect(page.getByText('Kuja is part of this next')).toBeVisible();

}



export async function kuja_team ( page ) {
    //Meet Kuja Team
      await page.getByRole('menuitem', { name: 'About' }).click();
  await expect(page.getByRole('heading', { name: 'Meet the Kuja team' })).toBeVisible();
  //await page.getByText('Elena Gillis Kuja Director Doreen Omitto Global Community Manager James Gutu').click();

}


