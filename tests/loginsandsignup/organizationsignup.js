import { test, expect } from '@playwright/test';
export async function org_signup_landing ( page ) {
 await page.goto('/');
  await expect(page.getByText('Register as an Organisation').first()).toBeVisible();
  await expect(page.getByText('For organisations supporting').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register your Organisation →' })).toBeVisible();
  await page.getByRole('link', { name: 'Register your Organisation →' }).click();
  await expect(page.getByRole('heading', { name: 'How would you like to connect?' })).toBeVisible();

  //network signup card choose
  await expect(page.getByText('I\'m a Network For umbrella')).toBeVisible();
  await expect(page.getByText('I\'m a Network')).toBeVisible();
  await expect(page.getByText('For umbrella groups,')).toBeVisible();
  //local organiation card
  await expect(page.getByText('I\'m a Local Organisation For')).toBeVisible();
  await expect(page.getByText('I\'m a Local Organisation')).toBeVisible();
  await expect(page.getByText('For community-based, national')).toBeVisible();

  //ingo
  await expect(page.getByText('I\'m an INGO/Donor')).toBeVisible();
  await expect(page.getByText('For international')).toBeVisible();

  //other items
  await expect(page.getByRole('heading', { name: 'I am none of these Contact us' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create account' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Already have an account? Sign' })).toBeVisible();

  //choose network for signup
  await page.getByText('I\'m a Network').click();
  await page.getByRole('button', { name: 'Create account' }).click();
  await expect(page.getByRole('img', { name: 'Check Icon' })).toBeVisible();
  await expect(page.getByText('Are you authorized to manage')).toBeVisible();
  await expect(page.getByText('By clicking proceed you')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Yes' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'No' })).toBeVisible();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('heading', { name: 'STEP' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'You\'ll need access to this' })).toBeVisible();
  await expect(page.getByText('Organisation Email Address')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Already have an account? Log' })).toBeVisible();


  //chooose cso for signup

   await page.getByRole('link', { name: '← Back' }).click();
  await page.getByRole('link', { name: 'No' }).click();
  await page.getByRole('link', { name: 'Register your Organisation →' }).click();
  await page.getByRole('radio', { name: 'I\'m a Local Organisation' }).check();
  await page.getByRole('button', { name: 'Create account' }).click();
  await expect(page.getByText('Are you authorized to manage')).toBeVisible();
  await expect(page.getByText('By clicking proceed you')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Yes' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'No' })).toBeVisible();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('heading', { name: 'STEP' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'You\'ll need access to this' })).toBeVisible();
}