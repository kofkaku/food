import React, { useState } from 'react';

const OrderList = () => {
  const initialOrders = [
    { id: 1, table: 'Столик 1', clients: 2, items: ['Борщ', 'Компот'], status: 'принят' },
    { id: 2, table: 'Столик 2', clients: 3, items: ['Салат', 'Кофе'], status: 'принят' },
    // Добавьте больше заказов по необходимости
  ];

  const [orders, setOrders] = useState(initialOrders);

  return (
    <div>
      <h2>Список заказов</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.table}, Клиентов: {order.clients}, Заказ: {order.items.join(', ')}, Статус: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
