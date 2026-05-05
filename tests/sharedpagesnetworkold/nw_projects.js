import { test, expect } from '@playwright/test';
export async function the_projectsd ( page ) {

 //Project creation
  await page.getByRole('link', { name: 'My Profile' }).click();
  await page.getByRole('button', { name: 'About' }).click({ timeout: 5000 });
  await expect(page.getByText('Our ProjectsAdd ProjectView all Projects Current projects Past projects No')).toBeVisible();
  await expect(page.getByText('Our ProjectsAdd ProjectView')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Our Projects' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Current projects' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Past projects' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add Project' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'View all Projects' })).toBeVisible();
  await expect(page.getByText('No current projects to display')).toBeVisible();
  await page.getByRole('button', { name: ' Add Project' }).click();

  // Scope the modal to the one containing the "Add Project" heading
  const modal = page.getByRole('dialog').filter({ has: page.getByRole('heading', { name: 'Add Project' }) });
  // Now this will be unique and follow strict mode
  await expect(modal.getByRole('heading', { name: 'Add Project' })).toBeVisible();
  // Continue using 'modal' for subsequent internal checks to ensure you stay within the dialog
  await expect(modal.getByRole('heading', { name: 'STEP 1/' })).toBeVisible();


  await expect(page.getByRole('heading', { name: 'Tell us about your project' })).toBeVisible();
  await expect(page.getByText('Name of the project *')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter project name' }).click();
  await page.getByRole('textbox', { name: 'Enter project name' }).fill('Automated test project');
  await expect(page.getByText('Description *')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter project description' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter project description' }).click();
  await page.getByRole('textbox', { name: 'Enter project description' }).fill('automated test project description');
  await expect(page.getByText('Is this project currently')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'No' })).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'No' })).toBeVisible();
  await expect(page.getByText('Country *')).toBeVisible();
  await page.getByRole('button', { name: 'Select an option ' }).click();
  await page.getByText('Andorra').click();
  await expect(page.getByText('(Optional)').first()).toBeVisible();
  await page.getByText('City (Optional)').click();
  await expect(page.getByRole('button', { name: 'Select city ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select city ' }).click();
  await page.getByText('Canillo').click();
  await page.waitForTimeout(3000);
  await expect(page.getByText('Funded by (Optional)')).toBeVisible();
  await page.waitForTimeout(3000);
//   const funderButton = page.getByRole('button', { name: /Search for funder/i });
//   await expect(funderButton).toBeVisible();
//   await funderButton.click();
   await page.locator('.kuja-select-async-wrapper > .o_select_menu > .o_select_menu_toggler').click();
  await page.getByRole('textbox', { name: 'Search...' }).click();
  
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('walter');
  await page.getByRole('menuitem', { name: 'Walter org2' }).click({ timeout: 30000 });

 

  //await page.getByRole('menuitem', { name: 'Walter org2' }).click();
  await page.getByRole('button', { name: 'Select currency ' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('ksh');
  await page.getByText('KES (KSh)').click();
  await page.getByRole('textbox', { name: '0.00' }).click();
  await page.getByRole('textbox', { name: '0.00' }).fill('1000');
  await expect(page.getByRole('button', { name: 'Next, add a focus area' })).toBeVisible();
  await page.getByRole('button', { name: 'Next, add a focus area' }).click();
  await expect(page.getByRole('heading', { name: 'STEP 2/' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Let others know the key areas' })).toBeVisible();
  await expect(page.getByText('Selecting focus areas that')).toBeVisible();
  await expect(page.getByText('Focus area (Optional)')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select a category ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select a category ' }).click();
  await page.getByText('Children & Youth').click();
  await expect(page.getByText('Narrow down your selection')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select specific focus areas ' })).toBeVisible();
  await page.getByRole('button', { name: 'Select specific focus areas ' }).click();
  await page.getByText('Child Protection', { exact: true }).click();
  await page.getByRole('button', { name: ' Add focus area(s)' }).click();
  await expect(page.getByRole('button', { name: ' Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip for now' })).toBeVisible();
  await page.getByRole('button', { name: 'Next, add videos or reports' }).click();
  await expect(page.getByRole('heading', { name: 'Tell us about your project' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STEP 3/' })).toBeVisible();
  await expect(page.getByText('Media')).toBeVisible();
  await expect(page.getByText('Allowed formats: MP4, PNG,')).toBeVisible();
  await expect(page.getByText('↑ Drag-and-drop file, or')).toBeVisible();
  await expect(page.getByText('Drag-and-drop file, or browse')).toBeVisible();
  await expect(page.getByText('Reports & Documents')).toBeVisible();
  await expect(page.getByText('Allowed formats: PDF, DOCX,')).toBeVisible();
  await expect(page.getByText('↑ Drag-and-drop files, or')).toBeVisible();
  await expect(page.getByText('Drag-and-drop files, or')).toBeVisible();
  await expect(page.getByRole('button', { name: ' Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip for now' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create Project' })).toBeVisible();
// 1. Target the Project Modal specifically
const projectModal = page.getByRole('dialog').filter({ hasText: 'Add Project' });

// 2. Click the Create button
const createBtn = projectModal.getByRole('button', { name: 'Create Project' });
await expect(createBtn).toBeVisible();

// Use Promise.all to wait for the modal to disappear while clicking
// This handles the race condition between the click and the UI change
await createBtn.click();

await expect(projectModal).toBeHidden();

// 3. BEST PRACTICE: Assert the positive outcome first
// This confirms the data actually saved before checking if the UI cleaned up
const successHeading = page.getByRole('heading', { name: 'Automated test project' });
await expect(successHeading).toBeVisible({ timeout: 150000 });



// 5. Handle Cookie Banner (only if it wasn't already handled)
const cookieBanner = page.getByRole('dialog').filter({ hasText: 'We use cookies' });
if (await cookieBanner.isVisible()) {
    await cookieBanner.getByRole('button', { name: 'I agree' }).click();
}

  //Confirm the project created
  await expect(page.getByRole('heading', { name: 'Automated test project' })).toBeVisible();
  await expect(page.getByText('Budget: 1,000 KSh')).toBeVisible();
  await expect(page.getByText('automated test project description')).toBeVisible();
  await expect(page.getByText('Funded by:')).toBeVisible();
  await expect(page.getByText('Canillo, AndorraSee details')).toBeVisible();
  await expect(page.getByRole('button', { name: 'See details Arrow' })).toBeVisible();
  await page.getByRole('button', { name: 'View all Projects' }).click();
  await expect(page.getByRole('heading', { name: 'Automated test project' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Actions' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add Project' })).toBeVisible();
  await page.getByRole('button', { name: 'Actions' }).click();

  //Edit Project
  await page.getByText('Edit Project').click();
  await page.getByRole('button', { name: 'Next, update a focus area' }).click();
  await page.getByRole('button', { name: 'Next, update videos or reports' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('button', { name: 'Actions' }).click();
  // FIX: Wait for the modal/dialog to disappear before interacting with the background
  const editModal = page.getByRole('dialog', { name: 'Edit Project' });
  await expect(editModal).toBeHidden();

  await page.getByText('Delete Project').click();
  await page.getByRole('button', { name: 'Confirm' }).click();

}