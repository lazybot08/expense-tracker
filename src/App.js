import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import uniqid from 'uniqid';

const INITIAL_EXPENSES = [
  {
    id: uniqid(),
    title: 'Watch',
    amount: 10000,
    date: new Date(2020, 7, 14),
  },
  { id: uniqid(),
    title: 'Television set',
    amount: 30000,
    date: new Date(2021, 2, 12) 
  },
  {
    id: uniqid(),
    title: 'Laptop',
    amount: 50000,
    date: new Date(2021, 2, 28),
  },
  {
    id: uniqid(),
    title: 'Headphone',
    amount: 5000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
