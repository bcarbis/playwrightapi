const { execSync } = require('child_process');

try {
    console.log('Running login.spec.ts...');
    execSync('npx playwright test tests/login.spec.ts', { stdio: 'inherit' });

  console.log('Running POSTaddContact.spec.ts...');
  execSync('npx playwright test tests/POSTaddContact.spec.ts', { stdio: 'inherit' });

  console.log('Running DELETEcontact.spec.ts...');
  execSync('npx playwright test tests/DELETEcontact.spec.ts', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running tests:', error);
  process.exit(1);
}