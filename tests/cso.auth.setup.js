import { test as setup } from '@playwright/test';
import { loginwith_email_cso } from './loginsandsignup/csologin'; 

const authFilecso = 'playwright/.auth/cso.json';

setup('authenticate with email OTP for cso', async ({ page }) => {
    // 1. Run your existing login logic
    await loginwith_email_cso(page);

    // 2. Ensure we are fully logged in before saving
   // await page.waitForURL('/org_profile'); 
    await page.waitForURL('/my/feed'); 
    await page.waitForLoadState('domcontentloaded');

    // 3. Save the storage state (cookies, localStorage, etc.)
    await page.context().storageState({ path: authFilecso });
});