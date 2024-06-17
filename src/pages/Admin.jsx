import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import OrderList from './OrderList.jsx';
import ShiftList from './ShiftList';
import NewEmployeeForm from './NewEmployeeForm.jsx';

const Admin = () => {
  const [view, setView] = useState('employees');

  return (
    <div>
      <h1>Администратор</h1>
      <nav>
        <button onClick={() => setView('employees')}>Сотрудники</button>
        <button onClick={() => setView('orders')}>Заказы</button>
        <button onClick={() => setView('shifts')}>Смены</button>
      </nav>
      <div>
        {view === 'employees' && <EmployeeList />}
        {view === 'orders' && <OrderList />}
        {view === 'shifts' && <ShiftList />}
      </div>
    </div>
  );
};

export default Admin;
