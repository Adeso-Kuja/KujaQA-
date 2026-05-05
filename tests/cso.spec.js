import { test, expect } from '@playwright/test';
import { userprofile_banners,userprofile_about_who_are_we,the_forumse,the_projectse} from './sharedpages_cso/userprofile.js';
import {members}from './sharedpages_cso/members.js';
import {resource_library}from './sharedpages_cso/resourcelibrary.js';
import {profileSettings}from './sharedpages_cso/profileSettings.js';
import {userfeeds}from './sharedpages_cso/userfeeds.js';
import {boardandteams}from './sharedpages_cso/boardandteams.js';
import {partnersandnetworks}from './sharedpages_cso/partnersandnetworks.js';
import {unlockfullpotential}from './sharedpages_cso/unlockfullpotential.js';
import {workwedo}from './sharedpages_cso/workwedo.js';
import {operationaloverview}from './sharedpages_cso/operationaloverview.js';
import {organizationgovernance_view}from './sharedpages_cso/organizationGovernance.js';
import {organizationgovernance_edit}from './sharedpages_cso/organizationGovernance.js';
import {grants,grants_learn_more}from './sharedpages_cso/grants.js';
import {notifications}from './sharedpages_cso/notifications.js';
import {dm_chat}from './sharedpages_cso/dmchat.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
 });

test('userprofile_banners', async ({ page }) => {
  test.setTimeout(60000);
  await userprofile_banners(page);
});

test('userprofile_about_who_are_we', async ({ page }) => {
  test.setTimeout(60000);
  await userprofile_about_who_are_we(page);
});


test('the_forumss', async ({ page }) => {
  test.setTimeout(60000);
  await the_forumse(page);
});


test('the_projects', async ({ page }) => {
  test.setTimeout(60000);
  await the_projectse(page);
});


test('members_page', async ({ page }) => {
  test.setTimeout(60000);
  await members(page);
});


test('resource_library', async ({ page }) => {
  test.setTimeout(60000);
  await resource_library(page);
});


test('profileSettings', async ({ page }) => {
  test.setTimeout(60000);
  const walterData = {
        userName: 'Walter CSO',
        location: 'Algeria'
    };
 // await profileSettings(page);
  await profileSettings(page, walterData);
});

test('userfeeds', async ({ page }) => {
  test.setTimeout(60000);
  await userfeeds(page);
});


test('boardandteams', async ({ page }) => {
  test.setTimeout(60000);
  await boardandteams(page);
});


test('partnersandnetworks', async ({ page }) => {
  test.setTimeout(60000);
  await partnersandnetworks(page);
});

test('unlockfullpotential', async ({ page }) => {
  test.setTimeout(60000);
  await unlockfullpotential(page);
});


test('workwedo', async ({ page }) => {
  test.setTimeout(60000);
  await workwedo(page);
});


test('operationaloverview', async ({ page }) => {
  test.setTimeout(60000);
  await operationaloverview(page);
});


test('organizationgovernance_view', async ({ page }) => {
  test.setTimeout(60000);
  await organizationgovernance_view(page);
});

test('organizationgovernance_edit', async ({ page }) => {
  test.setTimeout(60000);
  await organizationgovernance_edit(page);
});


test('notifications', async ({ page }) => {
  test.setTimeout(60000);
  await notifications(page);
});

 
 test('dm_chat', async ({ page }) => {
   test.setTimeout(60000);
   await dm_chat(page);
 });
 

 test('grants', async ({ page }) => {
   test.setTimeout(60000);
   await grants(page);
 });
 
 test('grants_learn_more', async ({ page }) => {
   test.setTimeout(60000);
   await grants_learn_more(page);
 });
 