// @ts-check
import { test, expect } from '@playwright/test';
import { Homepage, homepage_kuja_link_and_build_cards,homepage_kuja_listens_to_you,homepage_kuja_values,homepage_newsletter,homepage_partners  } from './externalweb/homepage.js';
import {about_us_landing,about_us_what_can_kuja_do_for_you,kuja_team } from './externalweb/aboutus.js';
import {individual_signup_landing,individual_signup_google_signup,individual_signup__linkedin,individual_signup_email,individual_signup_email_fill } from './loginsandsignup/individualsignup.js';
import {individual_login_confirmpage_details,_login_google,linkedin_login,twitter_login,loginwith_email_login}from './loginsandsignup/individualogin.js';
import {org_signup_landing}from './loginsandsignup/organizationsignup.js';

test('Open Browser', async ({ page }) => {
  test.setTimeout(60000);
  // await page.goto('/');
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Kuja Test/);
});

//Defined to help initiate browser for all Tests
 test.beforeEach(async ({ page }) => {
 // await page.goto('/');
  await page.goto('/', { waitUntil: 'domcontentloaded' });
 })


test('homepage', async ({ page }) => {
  test.setTimeout(60000);
  await Homepage(page);
  
});

test('homepage-kuja_link_and_build_cards', async ({ page }) => {
  test.setTimeout(60000);
  await homepage_kuja_link_and_build_cards(page);
});


test('homepage_kuja_listens_to_you', async ({ page }) => {
  await homepage_kuja_listens_to_you(page);
});



test('homepage_kuja_values', async ({ page }) => {
  await homepage_kuja_values(page);
});


test('homepage_newsletter', async ({ page }) => {
   test.setTimeout(60000);
  await homepage_newsletter(page);
});

test('homepage_partners', async ({ page }) => {
  await homepage_partners(page);
});


//ABOUT US

test('about_us_landing', async ({ page }) => {
  await about_us_landing(page);
});


test('about_us_what_can_kuja_do_for_you', async ({ page }) => {
  test.setTimeout(60000);
  await about_us_what_can_kuja_do_for_you(page);
});


test('kuja_team', async ({ page }) => {
   test.setTimeout(60000);
  await kuja_team(page);
});



//Indvidual Signup
test('individual_signup_landing', async ({ page }) => {
  await individual_signup_landing(page);
}
);


test('individual_signup_google_signup', async ({ page }) => {
  test.setTimeout(60000);
  await individual_signup_google_signup(page);
}
);




test('individual_signup__linkedin', async ({ page }) => {
  test.setTimeout(60000);
  await individual_signup__linkedin(page);
}
);


test('individual_signup_email', async ({ page }) => {
  test.setTimeout(60000);
  await individual_signup_email(page);
}
);

test('individual_signup_email_fill', async ({ page }) => {
  test.setTimeout(60000);
  await individual_signup_email_fill(page);
}
);


test('individual_login_confirmpage_details', async ({ page }) => {
  test.setTimeout(60000);
  await individual_login_confirmpage_details(page);
}
);

test('_login_google', async ({ page }) => {
  test.setTimeout(60000);
  await _login_google(page);
}
);


test('linkedin_login', async ({ page }) => {
  test.setTimeout(60000);
  await linkedin_login(page);
}
);

test('twitter_login', async ({ page }) => {
  test.setTimeout(60000);
  await twitter_login(page);
}
);


// test('loginwith_email_login', async ({ page }) => {
//   test.setTimeout(60000);
//   await loginwith_email_login(page);
// }
// );


//Organization Signup
test('org_signup_landing', async ({ page }) => {
  test.setTimeout(60000);
  await org_signup_landing(page);
}
);