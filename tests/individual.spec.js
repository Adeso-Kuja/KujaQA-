//import { userprofile_banners,userprofile_about_who_are_we,the_forumse,the_projectse} from './individualaccount/userprofile.js';
import { test, expect } from '@playwright/test';
import {members}from './sharedpages_cso/members.js';
import {resource_library}from './sharedpages_cso/resourcelibrary.js';
import {profileSettings}from './sharedpages_cso/profileSettings.js';
import {userfeeds}from './sharedpages_indv/ind_userfeeds.js';
import {dm_chat}from './sharedpages_cso/dmchat.js';
import {notifications}from './sharedpages_cso/notifications.js';
import {profile_bio,profile_social,profile_focus_areas,profile_Skills,profile_Languages,profile_Roles,profile_Affiliated,profile_burners} from './sharedpages_indv/ind_profile.js';




test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
 });



test('profile_bio', async ({ page }) => {
  test.setTimeout(60000);
  await profile_bio(page);
});


test('profile_social', async ({ page }) => {
  test.setTimeout(60000);
  await profile_social(page);
});


test('profile_focus_areas', async ({ page }) => {
  test.setTimeout(60000);
  await profile_focus_areas(page);
});

test('profile_Skills', async ({ page }) => {
  test.setTimeout(60000);
  await profile_Skills(page);

});

test('profile_Languages', async ({ page }) => {
  test.setTimeout(60000);
  await profile_Languages(page);
});


test('profile_Roles', async ({ page }) => {
  test.setTimeout(60000);
  await profile_Roles(page);
});

test('profile_Affiliated', async ({ page }) => {
  test.setTimeout(60000);
  await profile_Affiliated(page);
});

test('profile_burners', async ({ page }) => {
  test.setTimeout(60000);
  await profile_burners(page);
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
        userName: 'Walter Odhiambo',
        location: 'Algeria'
    };
  await profileSettings(page, walterData);

});

test('userfeeds', async ({ page }) => {
  test.setTimeout(60000);
  await userfeeds(page);
});



test('notifications', async ({ page }) => {
  test.setTimeout(60000);
  await notifications(page);
});

test('dm_chat', async ({ page }) => {
  test.setTimeout(60000);
  await dm_chat(page);
});





















//-------------------------------------
// test('boardandteams', async ({ page }) => {
//   test.setTimeout(60000);
//   await boardandteams(page);
// });


// test('partnersandnetworks', async ({ page }) => {
//   test.setTimeout(60000);
//   await partnersandnetworks(page);
// });

// test('unlockfullpotential', async ({ page }) => {
//   test.setTimeout(60000);
//   await unlockfullpotential(page);
// });


// test('workwedo', async ({ page }) => {
//   test.setTimeout(60000);
//   await workwedo(page);
// });


// test('operationaloverview', async ({ page }) => {
//   test.setTimeout(60000);
//   await operationaloverview(page);
// });


// test('organizationgovernance_view', async ({ page }) => {
//   test.setTimeout(60000);
//   await organizationgovernance_view(page);
// });

// test('organizationgovernance_edit', async ({ page }) => {
//   test.setTimeout(60000);
//   await organizationgovernance_edit(page);
// });
