import React, { useState } from 'react';
import NewEmployeeForm from './NewEmployeeForm';

const EmployeeList = () => {
  const initialEmployees = [
    { id: 1, name: 'Алексей', status: 'работает' },
    { id: 2, name: 'Ольга', status: 'работает' },
    // Добавьте больше сотрудников по необходимости
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const updateEmployeeStatus = (id, newStatus) => {
    setEmployees(employees.map(employee =>
      employee.id === id ? { ...employee, status: newStatus } : employee
    ));
  };

  return (
    <div>
      <h2>Список сотрудников</h2>
      <button onClick={() => setShowAddEmployee(true)}>Добавить сотрудника</button>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name}: {employee.status}
            <button onClick={() => updateEmployeeStatus(employee.id, 'уволен')}>
              Уволен
            </button>
          </li>
        ))}
      </ul>
      {showAddEmployee && <NewEmployeeForm setEmployees={setEmployees} setShowAddEmployee={setShowAddEmployee} />}
    </div>
  );
};

export default EmployeeList;
