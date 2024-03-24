// test.js

const assert = require('assert');
const sum = require('./sum');

try {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 should equal 3');
  assert.strictEqual(sum(5, 7), 12, '5 + 7 should equal 12');
  console.log('All tests passed successfully!');
} catch (error) {
  console.error('Test failed:', error.message);
}
