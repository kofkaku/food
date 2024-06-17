import React, { useState } from 'react';

const Cook = () => {
  // Пример данных заказов
  const initialOrders = [
    { id: 1, customer: 'Мясо по французки', status: 'принят' },
    { id: 2, customer: 'Салат Манс', status: 'принят' },
    // Добавьте больше заказов по необходимости
  ];

  // Состояние для управления заказами
  const [orders, setOrders] = useState(initialOrders);

  // Функция для изменения статуса заказа
  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <h1>Просмотр заказов</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customer}: {order.status}
            <button onClick={() => updateOrderStatus(order.id, 'готовится')}>
              Готовится
            </button>
            <button onClick={() => updateOrderStatus(order.id, 'готов')}>
              Готов
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cook;
