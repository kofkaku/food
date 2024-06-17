import React, { useState } from 'react';

const NewEmployeeForm = ({ setEmployees, setShowAddEmployee }) => {
  const [name, setName] = useState('');

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setEmployees(prevEmployees => [
        ...prevEmployees,
        { id: prevEmployees.length + 1, name: name, status: 'работает' }
      ]);
      setName('');
      setShowAddEmployee(false);
    }
  };

  return (
    <form onSubmit={handleAddEmployee}>
      <h3>Добавить нового сотрудника</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя сотрудника"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default NewEmployeeForm;
