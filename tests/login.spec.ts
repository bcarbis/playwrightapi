import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const AUTH_TOKEN = process.env.AUTH_TOKEN;

test('Authenticated request', async ({ request }: { request: any }) => {
    const token = 'your_auth_token';
  
    const response = await request.get('https://thinking-tester-contact-list.herokuapp.com/users/login', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    expect(response.status()).toBe(200);
  });
  
 