// import axios from 'axios';
// import dotenv from 'dotenv';
// import path from 'path';

const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

// Force load .env from the project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

/**
 * Fetches the latest 6-digit OTP from Outlook/Microsoft Graph.
 * Includes a polling loop and fail-fast logic for authentication.
 */
export async function getLatestOTP(credentials) {
  const tenantId = credentials?.tenant_id || process.env.OUTLOOK_TENANT_ID;
  const clientId = credentials?.client_id || process.env.OUTLOOK_CLIENT_ID;
  const clientSecret = credentials?.client_secret || process.env.OUTLOOK_CLIENT_SECRET;
  const userEmail = credentials?.user_email || process.env.OUTLOOK_USER_EMAIL;

  if (!tenantId || !clientId || !clientSecret || !userEmail) {
    throw new Error(`Missing OUTLOOK credentials. 
        Tenant: ${tenantId ? 'OK' : 'MISSING'}, 
        ID: ${clientId ? 'OK' : 'MISSING'}, 
        Secret: ${clientSecret ? 'OK' : 'MISSING'},
        User: ${userEmail ? 'OK' : 'MISSING'}`);
  }

  // 1. AUTHENTICATION: Get Access Token
  let accessToken;
  try {
    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('scope', 'https://graph.microsoft.com/.default');
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');

    const tokenRes = await axios.post(tokenUrl, params);
    accessToken = tokenRes.data.access_token;
  } catch (error) {
    throw new Error(`Failed to authenticate with Microsoft: ${error.response?.data?.error_description || error.message}`);
  }

  // 2. POLLING LOOP
  const maxAttempts = 10;
  const delayBetweenAttempts = 4000; // 4 seconds

  console.log("Searching for OTP email from notifications@kuja.org in Outlook...");
await new Promise(resolve => setTimeout(resolve, 10000));

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // Look for messages from sender, received in the last 2 minutes
      // Graph API uses OData filters
      // Change from 120000 (2 mins) to 600000 (10 mins)

// Also, log the URL to your console so you can see exactly what Graph is looking for:
      const timeLimit = new Date(Date.now() - 600000).toISOString();
      console.log(`Querying Graph API for mail received after: ${timeLimit}`);
      const mailUrl = `https://graph.microsoft.com/v1.0/users/${userEmail}/messages?$filter=from/emailAddress/address eq 'notifications@kuja.org' and receivedDateTime ge ${timeLimit}&$top=1&$select=id,bodyPreview,isRead`;

      const res = await axios.get(mailUrl, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      const messages = res.data.value;

      if (messages && messages.length > 0) {
        const message = messages[0];
        const body = message.bodyPreview || "";
        const otpMatch = body.match(/\d{6}/);

        if (otpMatch) {
          console.log(`OTP found on attempt ${attempt}: ${otpMatch[0]}`);

          // Mark as read immediately
          try {
            await axios.patch(`https://graph.microsoft.com/v1.0/users/${userEmail}/messages/${message.id}`, 
              { isRead: true },
              { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
            );
          } catch (modError) {
            console.warn("Could not mark email as read:", modError.response?.data || modError.message);
          }

          return otpMatch[0];
        }
      }
    } catch (error) {
      // --- CRITICAL FIX: Fail fast on Permissions ---
      if (error.response?.status === 403) {
        throw new Error(
          "OUTLOOK PERMISSION ERROR: Access Denied. Ensure 'Mail.Read' (Application) permission is granted and 'Admin Consent' is clicked in Azure."
        );
      }
      console.error(`Error during Outlook API attempt ${attempt}:`, error.message);
    }

    if (attempt < maxAttempts) {
      console.log(`OTP not found yet. Retrying in ${delayBetweenAttempts / 1000}s... (Attempt ${attempt}/${maxAttempts})`);
      await new Promise(resolve => setTimeout(resolve, delayBetweenAttempts));
    }
  }

  throw new Error("Timeout: OTP email from notifications@kuja.org was not found in Outlook after 10 attempts.");
}