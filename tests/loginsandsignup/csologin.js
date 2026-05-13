import { test, expect } from '@playwright/test';
import  { testData } from '../lib/variables.js';
//import {enter_login_email,otp_processing} from './loginsfunctions.js';
import {getLatestOTP} from '../lib/mailpit-helper.js';


export async function loginwith_email_cso ( page ) {
  const targetEmail = testData.csostaging; 
  await page.goto('/partners/signin');
  await page.getByRole('link', { name: /Log in with your email/i }).click();

  const throttledGetOTP = async (params) => {
  console.log('--- Step 3b: Initiating Throttled OTP Retrieval ---');
  // Optional: Add a small delay BEFORE the first call to let the server send the email
  await new Promise(resolve => setTimeout(resolve, 3000));
  return await getLatestOTP(params);
};
  await page.getByRole('textbox', { name: /Enter Email Address/i }).click();
  await expect(page.getByRole('heading', { name: 'Log In', exact: true })).toBeVisible();
  await expect(page.getByText('Welcome back. Please use your')).toBeVisible();
  await expect(page.getByText('Enter Email Address')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter Email Address' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Email Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Email Address' }).fill(targetEmail);


  // ... (Step 1: Submit Email) ...
   await page.getByRole('button', { name: 'Login' }).click();

   // Step 2: Fetch OTP via API (not via UI)
   // const otp = await getLatestOTP({
   //   client_id: process.env.GMAIL_CLIENT_ID,
   //   client_secret: process.env.GMAIL_CLIENT_SECRET,
   //   refresh_token: process.env.GMAIL_REFRESH_TOKEN

   //   // tenant_id: process.env.OUTLOOK_TENANT_ID,
   //   // client_id: process.env.OUTLOOK_CLIENT_ID,
   //   // client_secret: process.env.OUTLOOK_CLIENT_SECRET,
   //   // user_email: process.env.OUTLOOK_USER_EMAIL
   // });

 
 const otp = await getLatestOTP(targetEmail);

   // 2. Safety check: Ensure we actually got a 6-digit code
 if (!otp || otp.length !== 6) 
  {
  throw new Error(`Invalid OTP received: ${otp}`);
 }

 // 3. Enter the codes into the digit fields #digit-1 to #digit-6
 for (let i = 0; i < otp.length; i++) {
 // Digit IDs start at 1, but our loop index starts at 0
 const selector = `#digit-${i + 1}`;
 // await page.locator(selector).fill(otp[i]);
 await page.locator(selector).waitFor({ state: 'visible' });
 await page.locator(selector).pressSequentially(otp[i], { delay: 100 });
 }

  //await expect(page.getByRole('heading', { name: 'Let\'s verify your account' })).toBeVisible();
  await expect(page.getByText('We sent a verification code')).toBeVisible();
  await expect(page.getByText('If you don\'t see it, please')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Resend the code' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Send to a different email' })).toBeVisible();

  //check if otp textboxes are visible
   await expect(page.locator('#digit-1')).toBeVisible();
  await expect(page.locator('#digit-2')).toBeVisible();
  await expect(page.locator('#digit-3')).toBeVisible();
  await expect(page.locator('#digit-4')).toBeVisible();
  await expect(page.locator('#digit-5')).toBeVisible();
  await expect(page.locator('#digit-6')).toBeVisible();

// 4. Click verify
  await page.getByRole('button', { name: /Verify my account/i }).click();
  //await page.waitForLoadState('networkidle');
  //await expect(page.getByRole('link', { name: 'My Profile' })).toBeVisible();
  
 // await expect(page.getByRole('link', { name: 'My Profile' })).toBeVisible({ timeout: 15000 });


  const myProfileLink = page.getByRole('link', { name: 'My Profile' });
// This automatically waits for the navigation to complete and the element to be visible
   await expect(myProfileLink).toBeVisible({ timeout: 20000 });
  
}


