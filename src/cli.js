// Prints each order on one line, then the total.
import { loadOrders, totalAmount } from './orders.js';

const orders = await loadOrders();
for (const order of orders) {
  console.log(`${order.id}\t${order.date}\t${order.amount}`);
}
console.log(`total\t${totalAmount(orders)}`);
