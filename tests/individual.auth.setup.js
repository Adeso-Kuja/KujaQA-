import { test as setup } from '@playwright/test';
import { loginwith_email_login } from './loginsandsignup/individualogin'; // Adjust path

const authFile = 'playwright/.auth/individual.json';

setup('authenticate with email OTP', async ({ page }) => {
    // 1. Run your existing login logic
    await loginwith_email_login(page);

    // 2. Ensure we are fully logged in before saving
   // await page.waitForURL('/org_profile'); 
    await page.waitForURL('/my/feed'); 

   
    
    // 3. Save the storage state (cookies, localStorage, etc.)
    await page.context().storageState({ path: authFile });
});