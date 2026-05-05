import { test, expect } from '@playwright/test';



export async function Homepage ( page ) {

  await expect(page.getByRole('menuitem', { name: 'Home' })).toBeVisible();
  await expect(page.locator('.col-6').first()).toBeVisible();
  //One Platform
  await expect(page.getByText('One Platform.').first()).toBeVisible({ timeout: 15000 });
  await expect(page.getByText('Global Changemakers').first()).toBeVisible({ timeout: 15000 });
  await expect(page.getByText('seeking collaborators').first()).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole('img').nth(2)).toBeVisible();

  //Register cards for organizations
   await expect(page.locator('.register-card').first()).toBeVisible();
  await expect(page.getByText('Register as an Organisation').first()).toBeVisible();
  await expect(page.getByText('For organisations supporting').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register your Organisation →' })).toBeVisible();
   //Register cards for individuals
  await expect(page.getByText('Register as an Individual').first()).toBeVisible();
  await expect(page.getByText('For individuals looking to').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create your personal account →' })).toBeVisible();
  await page.getByRole('link', { name: 'Register your Organisation →' }).click();

  await expect(page.getByRole('heading', { name: 'How would you like to connect?' })).toBeVisible();
  await page.goto('/');
  await page.getByRole('link', { name: 'Create your personal account →' }).click();
  await page.getByRole('heading', { name: 'Welcome to Kuja' }).click();
  await page.goto('/');


}


export async function homepage_kuja_link_and_build_cards (page){
  //Kuja link card
  await expect(page.getByText('Matching local brilliance with global funding. Smart Matching. Connect local')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Kuja Link Logo' })).toBeVisible();
  await expect(page.getByText('with global funding.')).toBeVisible();
  await expect(page.getByText('Smart Matching. Connect local')).toBeVisible();
  await expect(page.getByText('Amplify Visibility. Showcase')).toBeVisible();
 
  await page.goto('/');

  //Kuja Build card
  await expect(page.getByText('Coming in 2026 Built for')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Kuja Build Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Coming in' })).toBeVisible();
  await expect(page.getByText('designed for performance.')).toBeVisible();
  await expect(page.getByText('Compliance Made Easy. Identify and address gaps in your organization’s')).toBeVisible();
  await expect(page.getByText('End-to-End Grant Management. Access intuitive software and expert support to')).toBeVisible();
  await page.goto('/');
}

export async function homepage_kuja_listens_to_you (page){

      await expect(page.getByText('Kuja listens to you. We')).toBeVisible();

}



export async function homepage_kuja_values (page){

  await expect(page.getByText('Kuja\'s Value Join a platform')).toBeVisible();
  await expect(page.getByText('Kuja\'s Value')).toBeVisible();
  await expect(page.getByText('Join a platform where local')).toBeVisible();
  await expect(page.locator('.img-fluid.value-logo').first()).toBeVisible();
  await expect(page.getByText('Amplify your impact')).toBeVisible();
  await expect(page.getByText('Build a powerful presence for')).toBeVisible();
  await expect(page.getByText('Connect globally')).toBeVisible();
  await expect(page.getByText('Direct message individuals')).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Be a thought-leader')).toBeVisible();
  await expect(page.getByText('Be a thought-leader Join')).toBeVisible();
  await expect(page.getByText('Search for funding Discover')).toBeVisible();
  await expect(page.locator('div:nth-child(4) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Search for funding')).toBeVisible();
  await expect(page.getByText('Discover and explore best-fit')).toBeVisible();
  await expect(page.locator('div:nth-child(5) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Find Grantees')).toBeVisible();
  await expect(page.getByText('Search and discover local')).toBeVisible();
  await expect(page.locator('div:nth-child(6) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Build your skills')).toBeVisible();
  await expect(page.getByText('Access courses, templates,')).toBeVisible();
  await expect(page.locator('div:nth-child(7) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Simplify your finances')).toBeVisible();
  await expect(page.getByText('Manage your organisation\'s')).toBeVisible();
  await expect(page.locator('div:nth-child(8) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Build funding pipelines')).toBeVisible();
  await expect(page.getByText('Track funding prospects and')).toBeVisible();
  await expect(page.locator('div:nth-child(9) > .h-100 > .card-body > .img-fluid')).toBeVisible();
  await expect(page.getByText('Track project progress')).toBeVisible();
  await expect(page.getByText('Monitor milestones,')).toBeVisible();

}



export async function homepage_newsletter (page){

  await page.getByText('Subscribe to our newsletter Follow us on socials NameEmail addressLanguage you').click();
  await expect(page.getByText('Subscribe to our newsletter Follow us on socials NameEmail addressLanguage you')).toBeVisible();
  await expect(page.getByText('Subscribe to our newsletter')).toBeVisible();
  await expect(page.getByRole('main').getByText('Follow us on socials')).toBeVisible();

  //Validate the form is visible
  await expect(page.getByText('Name')).toBeVisible();
  await expect(page.getByRole('textbox').first()).toBeVisible();
  await expect(page.getByText('Email address')).toBeVisible();
  await expect(page.getByRole('textbox').nth(1)).toBeVisible();
  await expect(page.getByText('Language you want to receive')).toBeVisible();
  await expect(page.getByRole('combobox')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();

  //Validate the social links are working 
  //a)facebook
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s_share > a').first().click();
  const page1 = await page1Promise;
  await expect(page.locator('.social-links > div:nth-child(2) > a')).toBeVisible();
 // await expect(page).toHaveURL('https://www.facebook.com/people/KUJA/61562111601549/?rdid=pXlo5b6tBdCdfqNo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DsKQ5WoDq%2F');
  //b)Linkedin
  const page2Promise = page.waitForEvent('popup');
  await page.locator('.social-links > div:nth-child(2) > a').click();
  const page2 = await page2Promise;
  await expect(page.locator('div:nth-child(3) > a')).toBeVisible();
  //await expect(page).toHaveURL('https://www.linkedin.com/company/kuja-platform/');

  //c)xplatform
  const page3Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(3) > a').click();
  const page3 = await page3Promise;
 //await expect(page).toHaveURL('https://x.com/Kuja_Platform');

  //d)youtube
  const page4Promise = page.waitForEvent('popup');
  await page.locator('.social-links > div:nth-child(4) > a').click();
  const page4 = await page4Promise;
 //  await expect(page).toHaveURL('https://www.youtube.com/@Kuja_Platform');
  
}


export async function homepage_partners (page){
 await expect(page.getByText('Partners', { exact: true })).toBeVisible();
  await expect(page.getByText('At Kuja, collaboration is at')).toBeVisible();
  await expect(page.getByText('Want to get featured on our')).toBeVisible();


}