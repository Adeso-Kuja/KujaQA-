
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Define unique paths for different user sessions
const INDIVIDUAL_AUTH = path.join(process.cwd(), 'playwright/.auth/individual.json');
const CSO_AUTH = path.join(process.cwd(), 'playwright/.auth/cso.json');
const NETWORK_AUTH = path.join(process.cwd(), 'playwright/.auth/network.json');
const INGO_AUTH = path.join(process.cwd(), 'playwright/.auth/ingo.json');



export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 2,
  workers: process.env.CI ? 4 : undefined,
  //reporter: 'html',

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  expect: {
    timeout: 20000, 
  },

  use: {
    baseURL: 'https://staging.link.kuja.org/',
    trace: 'on-first-retry',
   // screenshot: 'only-on-failure',
   // video: 'on-first-retry',
    actionTimeout: 20000, 

    // storageState: 'basicauth.json',
    // // For HTTP Basic Auth specifically, you can also hardcode it here:
    // extraHTTPHeaders: {
    //   'Authorization': `Basic ${Buffer.from('username:password').toString('base64')}`,
    // },
  },

  projects: [
    // --- 1. PUBLIC WEBSITE (Runs first, no login) ---
    {
      name: 'public-site',
      testMatch: /entrypoint\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },

    // --- 2. MULTI-ROLE SETUP (Depends on Public Site) ---
    {
      name: 'setup-individual',
      testMatch: /individual\.auth\.setup\.js/, 
      timeout: 90000,
    },
      {
      name: 'setup-ingo',
      testMatch: /ingo\.auth\.setup\.js/, 
      timeout: 90000,
    },

    {
      name: 'setup-cso',
      testMatch: /cso\.auth\.setup\.js/,
      timeout: 90000,
     // dependencies: ['public-site'],
    },
    {
      name: 'setup-network',
      testMatch: /network\.auth\.setup\.js/,
      timeout: 90000,
     // dependencies: ['public-site'],
    },

    // --- 3. MAIN PROJECTS (Role-Specific) ---
    {
      name: 'individual-portal',
      testMatch: /individual\.spec\.js/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: INDIVIDUAL_AUTH, 
      },
      dependencies: ['setup-individual'],
    },
 {
      name: 'ingo-portal',
      testMatch: /ingo\.spec\.js/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: INGO_AUTH,
      },
      dependencies: ['setup-ingo'],
    },

    {
      name: 'cso-portal',
      testMatch: /cso\.spec\.js/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: CSO_AUTH, 
      },
      dependencies: ['setup-cso'],
    },
    {
      name: 'network-portal',
      testMatch: /network\.spec\.js/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: NETWORK_AUTH, 
      },
      dependencies: ['setup-network'],
    },
  ],
 
});