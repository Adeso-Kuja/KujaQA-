import { test, expect } from '@playwright/test';
test.use({ baseURL: 'https://kuja.org' });


export async function individual_signup_landing ( page ) {

  await page.goto('/');
  await expect(page.locator('.register-card').first()).toBeVisible();
  await page.getByRole('link', { name: 'Create your personal account →' }).click();
  await expect(page.getByText('Back STEP')).toBeVisible();
  await expect(page.getByText('STEP')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to Kuja' })).toBeVisible();
 
}


export async function individual_signup_google_signup ( page ) {
      await page.goto('/partners/signup');
 await page.getByRole('button', { name: /Register with google/i }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('walterochieng6950@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('/partners/signup');
}


export async function individual_signup__linkedin ( page ) {
   await page.goto('/partners/signup');
  await expect(page.getByRole('button', { name: ' Register with linkedin' })).toBeVisible();
  await page.getByRole('button', { name: ' Register with linkedin' }).click();
  await page.getByRole('textbox', { name: 'Email or Phone' }).click();
  await page.getByRole('textbox', { name: 'Email or Phone' }).click();
  await page.getByRole('textbox', { name: 'Email or Phone' }).fill('walterochieng6950@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('/partners/signup');
}

export async function individual_signup_email ( page ) {
  await page.goto('/');
  //await page.getByRole('link', { name: 'Create your personal account →' }).click();
  
  const personalaccunt  = page.getByRole('link', { name: /Create your personal account/i });
  await expect(personalaccunt).toBeVisible();
  await personalaccunt.click();

  //await page.goto('/partners/signup');
  
  const emailLink = page.getByRole('link', { name: /Register with your email/i });
  await expect(emailLink).toBeVisible();
  await emailLink.click();
  //await expect(page.getByText('Already have an account? Log')).toBeVisible();
  await expect(page.getByText('Already have an account')).toBeVisible();
  //await expect(page.getByRole('link', { name: 'Log in', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: /Log in/i })).toBeVisible();
}



export async function individual_signup_email_fill ( page ) {
 //actual signup steps for personal account
  await page.goto('/registration/individual/step_1'); 
  //await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Welcome to Kuja/i })).toBeVisible();
  await page.getByRole('link', { name: /Register with your email/i }).click();
  // 4. Now the form elements will be visible
  await expect(page.getByText(/You'll need access to this/i)).toBeVisible();
  await expect(page.getByText('Personal Email Address')).toBeVisible();
  
  const emailInput = page.getByRole('textbox', { name: 'Personal Email Address' });
  await expect(emailInput).toBeVisible();
  // 5. Fill and Submit
  await emailInput.fill('botacad725@availors.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.getByRole('heading', { name: 'Let\'s verify your account' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Let's verify your account/i })).toBeVisible();
  await expect(page.getByText('We sent a verification code')).toBeVisible();
  await expect(page.getByText('If you don\'t see it, please')).toBeVisible();
  await expect(page.locator('.d-flex.justify-content-center').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Verify my account' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Resend the code' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Send to a different email' })).toBeVisible();
}

