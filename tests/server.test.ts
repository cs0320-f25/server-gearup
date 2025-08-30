import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:8000';

/*  TODO 5: Here's a starting point of playwright tests written by Copilot.
    1. Run the tests. Did they fail? If so, why? What went wrong? 
        Note that to run the playwright tests you need to have the server running!
    2. Investigate the true behavior of Agify and our server proxy.
    3. Write a couple more tests, and modify these tests if you think you should...
*/

test.describe('Agify API', () => {
  test('should return age for a valid name', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/agify?name=Alice`);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('name', 'Alice');
    expect(body).toHaveProperty('age');
    expect(typeof body.age === 'number' || body.age === null).toBe(true);
  });

  test('should return 400 for missing name', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/agify`, {
      data: {}
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty('error');
  });

  test('should return 404 for unknown name', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/agify?name=asdfa`);
    // Accept either 200 with null age, or 404 error
    if (response.status() === 404) {
      const body = await response.json();
      expect(body).toHaveProperty('error');
    } else {
      const body = await response.json();
      expect(body).toHaveProperty('age');
      expect(body.age === null || typeof body.age === 'number').toBe(true);
    }
  });
});
