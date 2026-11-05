// Reads the order list used by the CLI. Kept tiny on purpose: this repo exists
// so that an AI agent can open draft pull requests against real code and tests.
import { readFile } from 'node:fs/promises';

const DEFAULT_PATH = new URL('../data/orders.json', import.meta.url);

export async function loadOrders(path = DEFAULT_PATH) {
  const text = await readFile(path, 'utf8');
  const orders = JSON.parse(text);
  if (!Array.isArray(orders)) throw new TypeError('orders.json must hold an array');
  return orders;
}

export function totalAmount(orders) {
  return orders.reduce((sum, order) => sum + order.amount, 0);
}
