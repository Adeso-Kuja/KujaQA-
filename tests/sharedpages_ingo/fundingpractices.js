export async function funding_practices ( page ) {
await page.getByRole('link', { name: 'My Profile' }).click({ timeout: 90000 });

//view partnership requirements
  await expect(page.getByRole('heading', { name: 'Partnership Requirements' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('heading', { name: 'Funding Practices' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Edit' }).nth(2)).toBeVisible();
  await expect(page.getByText('Annual granting total $')).toBeVisible();
  await expect(page.getByText('Do you give ICR?YesNo')).toBeVisible();
  await expect(page.getByText('What is your ICR rate for')).toBeVisible();
  await expect(page.getByText('How long are most of your')).toBeVisible();
  await expect(page.getByText('What type of funding do you')).toBeVisible();
  await expect(page.getByText('Do you use any of the')).toBeVisible();

  //edit partnership requirements
  await page.getByRole('button', { name: 'Edit Edit' }).nth(2).click({ timeout: 90000 });
  await expect(page.locator('#dialog_0').getByRole('heading', { name: 'Funding Practices' })).toBeVisible({ timeout: 90000 });
  await expect(page.getByRole('heading', { name: 'Application materials' })).toBeVisible();
  await expect(page.getByText('(Optional)')).toBeVisible();
  await expect(page.getByText('Upload document (Optional)↑')).toBeVisible();
  await expect(page.getByText('allowed formats: PDF, DOC,')).toBeVisible();
  await expect(page.getByText('Application Requirements')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Write here' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add Requirements' })).toBeVisible();
  await expect(page.getByText('Annual Granting Total', { exact: true })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Annual Granting Total$/ })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByText('Next').click();
  await expect(page.locator('#dialog_0').getByText('Do you give ICR?')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Yes' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^No$/ })).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('What is your ICR rate for')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('How long are most of your')).toBeVisible();
  await expect(page.getByRole('button', { name: 'years  ' })).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('What type of funding do you')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Restricted$/ })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Unrestricted$/ })).toBeVisible();
  await expect(page.locator('#dialog_0').getByText('Do you use any of the')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Trust-based  ' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
}