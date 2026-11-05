import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadOrders, totalAmount } from '../src/orders.js';

test('loadOrders returns the sample orders', async () => {
  const orders = await loadOrders();
  assert.equal(orders.length, 3);
  assert.equal(orders[0].id, 'A-1001');
});

test('totalAmount sums every amount', () => {
  assert.equal(totalAmount([{ amount: 100 }, { amount: 250 }]), 350);
  assert.equal(totalAmount([]), 0);
});
