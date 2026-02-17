// @ts-check
import { test, expect } from '@playwright/test';
import { Homepage, homepage_kuja_link_and_build_cards,homepage_kuja_listens_to_you,homepage_kuja_values,homepage_newsletter  } from './homepage.js';

test('Open Browser', async ({ page }) => {
  await page.goto('/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Kuja Test/);
});

//Defined to help initiate browser for all Tests
 test.beforeEach(async ({ page }) => {
  await page.goto('/');
 })


test('homepage', async ({ page }) => {
  await Homepage(page);
  await homepage_kuja_link_and_build_cards(page);
});

test('homepage-kuja_link_and_build_cards', async ({ page }) => {
  await homepage_kuja_link_and_build_cards(page);
});


test('homepage_kuja_listens_to_you', async ({ page }) => {
  await homepage_kuja_listens_to_you(page);
});



test('homepage_kuja_values', async ({ page }) => {
  await homepage_kuja_values(page);
});


test('homepage_newsletter', async ({ page }) => {
  await homepage_newsletter(page);
});

test('homepage_partners', async ({ page }) => {
  await homepage_partners(page);
});


