import React, { useState } from 'react';

const ShiftList = () => {
  const initialShifts = [
    { id: 1, date: '2024-06-15', employees: ['Алексей', 'Ольга'] },
    { id: 2, date: '2024-06-16', employees: ['Иван', 'Мария'] },
    // Добавьте больше смен по необходимости
  ];

  const [shifts, setShifts] = useState(initialShifts);
  const [newShiftDate, setNewShiftDate] = useState('');
  const [newShiftEmployees, setNewShiftEmployees] = useState('');

  const addShift = (date, employees) => {
    const newShift = {
      id: shifts.length + 1,
      date: date,
      employees: employees.split(',').map(emp => emp.trim())
    };
    setShifts([...shifts, newShift]);
  };

  const handleAddShift = (e) => {
    e.preventDefault();
    if (newShiftDate.trim() !== '' && newShiftEmployees.trim() !== '') {
      addShift(newShiftDate, newShiftEmployees);
      setNewShiftDate('');
      setNewShiftEmployees('');
    }
  };

  return (
    <div>
      <h2>Список смен</h2>
      <form onSubmit={handleAddShift}>
        <input
          type="date"
          value={newShiftDate}
          onChange={(e) => setNewShiftDate(e.target.value)}
          placeholder="Дата смены"
        />
        <input
          type="text"
          value={newShiftEmployees}
          onChange={(e) => setNewShiftEmployees(e.target.value)}
          placeholder="Сотрудники (через запятую)"
        />
        <button type="submit">Добавить смену</button>
      </form>
      <ul>
        {shifts.map(shift => (
          <li key={shift.id}>
            {shift.date}, Сотрудники: {shift.employees.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShiftList;
