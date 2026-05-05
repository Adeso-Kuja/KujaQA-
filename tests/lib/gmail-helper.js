
// lib/gmail-helper.js
import { google } from 'googleapis';
import dotenv from 'dotenv';
import path from 'path';

// Force load .env from the project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

/**
 * Fetches the latest 6-digit OTP from Gmail.
 * Includes a polling loop and fail-fast logic for authentication scope errors.
 */
export async function getLatestOTP(credentials) {
  const clientID = credentials?.client_id || process.env.GMAIL_CLIENT_ID;
  const clientSecret = credentials?.client_secret || process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = credentials?.refresh_token || process.env.GMAIL_REFRESH_TOKEN;

  if (!refreshToken || !clientID || !clientSecret) {
    throw new Error(`Missing GMAIL credentials. 
        ID: ${clientID ? 'OK' : 'MISSING'}, 
        Secret: ${clientSecret ? 'OK' : 'MISSING'}, 
        Token: ${refreshToken ? 'OK' : 'MISSING'}`);
  }

  const auth = new google.auth.OAuth2(clientID, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  // 1. FORCE REFRESH: Validates credentials before entering the loop
  try {
    await auth.getAccessToken();
  } catch (error) {
    throw new Error(`Failed to authenticate with Google: ${error.message}`);
  }

  const gmail = google.gmail({ version: 'v1', auth });

  // 2. POLLING LOOP
  const maxAttempts = 10;
  const delayBetweenAttempts = 4000; // 4 seconds (total 40s max)

  console.log("Searching for OTP email from notifications@kuja.org...");

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // Look for unread messages specifically from the notification sender
      const res = await gmail.users.messages.list({
        userId: 'me',
        q: 'from:notifications@kuja.org after:' + Math.floor((Date.now() - 120000) / 1000),
        maxResults: 1,
      });

      if (res.data.messages && res.data.messages.length > 0) {
        const messageId = res.data.messages[0].id;
        const msg = await gmail.users.messages.get({ userId: 'me', id: messageId });

        const body = msg.data.snippet || "";
        const otpMatch = body.match(/\d{6}/); // Matches first 6-digit sequence

        if (otpMatch) {
          console.log(`OTP found on attempt ${attempt}: ${otpMatch[0]}`);
          
          // Mark as read immediately so parallel tests don't pull the same code
          try {
            await gmail.users.messages.batchModify({
              userId: 'me',
              ids: [messageId],
              resource: { removeLabelIds: ['UNREAD'] }
            });
          } catch (modError) {
            console.warn("Could not mark email as read (scope might be readonly):", modError.message);
          }

          return otpMatch[0];
        }
      }
    } catch (error) {
      // --- CRITICAL FIX: Fail fast on Scope Errors ---
      if (error.message.toLowerCase().includes('insufficient authentication scopes')) {
        throw new Error(
          "GMAIL PERMISSION ERROR: Your OAuth Token is missing the 'https://www.googleapis.com/auth/gmail.modify' or 'gmail.readonly' scope. Please regenerate your Refresh Token with the correct scopes."
        );
      }
      
      console.error(`Error during Gmail API attempt ${attempt}:`, error.message);
    }

    if (attempt < maxAttempts) {
      console.log(`OTP not found yet. Retrying in ${delayBetweenAttempts / 1000}s... (Attempt ${attempt}/${maxAttempts})`);
      await new Promise(resolve => setTimeout(resolve, delayBetweenAttempts));
    }
  }

  throw new Error("Timeout: OTP email from notifications@kuja.org was not found after 10 attempts.");
}