import { test, expect } from '@playwright/test';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const firstName = 'John';
const lastName = 'Doe';
const postalCode = 10001;  // Replace with dynamic value if needed
const AUTH_TOKEN = process.env.AUTH_TOKEN;

test('Add contact and save ID', async ({ request }) => {
  // Log the AUTH_TOKEN to verify it's being read correctly
  console.log(`AUTH_TOKEN: ${AUTH_TOKEN}`);

  // Send POST request
  const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AUTH_TOKEN}`, // Include token if needed
    },
    data: {
      firstName: 'John',
      lastName: 'Doe',
      birthdate: '1977-07-07',
      email: 'email@email.com',
      phone: '8005551000',
      street1: '123 Main St.',
      street2: 'Apartment Q',
      city: 'New York',
      stateProvince: 'NY',
      postalCode: postalCode,
      country: 'USA',
    },
  });

  // Log and validate response
  const responseData = await response.json();
  console.log(responseData);
  expect(response.status()).toBe(201); // Expect successful creation

  // Save _id as a variable
  const contactId = responseData._id;
  console.log(`Contact ID: ${contactId}`);

  // Write contact ID to a file
  await fs.writeFile('contactId.txt', contactId);
});