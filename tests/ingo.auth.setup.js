import { test as setup } from '@playwright/test';
import { loginwith_email_ingo } from './loginsandsignup/ingologin'; 

const authFileingo = 'playwright/.auth/ingo.json';

setup('authenticate with email OTP for ingo', async ({ page }) => {
    // 1. Run your existing login logic
    await loginwith_email_ingo(page);

    // 2. Ensure we are fully logged in before saving
   // await page.waitForURL('/org_profile'); 
    await page.waitForURL('/my/feed'); 


    // 3. Save the storage state (cookies, localStorage, etc.)
    await page.context().storageState({ path: authFileingo });
});