const db = require('../db');

describe('Testing routes', () => {
  jest.setTimeout(100000);

  test('test 1', async () => {
    await db.setUp();
    console.log('It works');
    expect(true);
  });
});
