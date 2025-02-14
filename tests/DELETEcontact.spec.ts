import { test, expect } from '@playwright/test';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const AUTH_TOKEN = process.env.AUTH_TOKEN;
let contactId: string;

test.beforeAll(async () => {
  // Read contact ID from file
  contactId = await fs.readFile('contactId.txt', 'utf-8');
});

test('Delete contact using saved ID', async ({ request }) => {
  // Send DELETE request
  const response = await request.delete(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`, // Include token if needed
    },
  });

  // Log and validate response
  console.log(`Delete response status: ${response.status()}`);
  expect(response.status()).toBe(200); // Expect successful deletion
});

test('Check successful deletion message', async ({ request }) => {
  // Send DELETE request
  const response = await request.delete(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`, // Include token if needed
    },
  });

    // Log and validate response    
test('Check headers presence', async ({ request }) => {
  // Send DELETE request
  const response = await request.delete(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`, // Include token if needed
    },
  });

  // Log the response headers
  const headers = response.headers();
  console.log(`Response headers: ${JSON.stringify(headers, null, 2)}`);

  // Test for headers presence
  expect(headers).toHaveProperty('server');
  expect(headers).toHaveProperty('report-to');
  expect(headers).toHaveProperty('reporting-endpoints');
  expect(headers).toHaveProperty('nel');
  expect(headers).toHaveProperty('connection');
  expect(headers).toHaveProperty('x-powered-by');
  expect(headers).toHaveProperty('date');
  expect(headers).toHaveProperty('content-length');
  expect(headers).toHaveProperty('via');
});

 
}); 