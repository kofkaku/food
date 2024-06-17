import React, { useState } from 'react';

const Waiter = () => {
  // Пример начальных данных заказов
  const initialOrders = [
    { id: 1, table: 'Столик 1', clients: 2, items: ['Борщ', 'Компот'], status: 'принят' },
    { id: 2, table: 'Столик 2', clients: 3, items: ['Салат', 'Кофе'], status: 'принят' },
    // Добавьте больше заказов по необходимости
  ];

  // Состояние для управления заказами
  const [orders, setOrders] = useState(initialOrders);
  const [newTable, setNewTable] = useState('');
  const [newClients, setNewClients] = useState('');
  const [newItems, setNewItems] = useState('');

  // Функция для добавления нового заказа
  const addOrder = (table, clients, items) => {
    const newOrder = {
      id: orders.length + 1,
      table: table,
      clients: parseInt(clients),
      items: items.split(',').map(item => item.trim()),
      status: 'принят'
    };
    setOrders([...orders, newOrder]);
  };

  // Функция для изменения статуса заказа
  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  // Функция для обработки добавления нового заказа
  const handleAddOrder = (e) => {
    e.preventDefault();
    if (newTable.trim() !== '' && newClients.trim() !== '' && newItems.trim() !== '') {
      addOrder(newTable, newClients, newItems);
      setNewTable('');
      setNewClients('');
      setNewItems('');
    }
  };

  return (
    <div>
      <h1>Создание нового заказа</h1>
      <form onSubmit={handleAddOrder}>
        <input
          type="text"
          value={newTable}
          onChange={(e) => setNewTable(e.target.value)}
          placeholder="Столик"
        />
        <input
          type="number"
          value={newClients}
          onChange={(e) => setNewClients(e.target.value)}
          placeholder="Количество клиентов"
        />
        <input
          type="text"
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
          placeholder="Заказанные блюда и напитки (через запятую)"
        />
        <button type="submit">Добавить заказ</button>
      </form>
      <h1>Список заказов</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.table}, Клиентов: {order.clients}, Заказ: {order.items.join(', ')}, Статус: {order.status}
            <button onClick={() => updateOrderStatus(order.id, 'принят')}>
              Принят
            </button>
            <button onClick={() => updateOrderStatus(order.id, 'оплачен')}>
              Оплачен
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Waiter;
