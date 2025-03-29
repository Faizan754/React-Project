import { useState } from "react";
import ExpenseList from "./components/Expense-Tracker/ExpenseList";
import ExpenseFilter from "./components/Expense-Tracker/ExpenseFilter";
import ExpenseForm from "./components/Expense-Tracker/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 20, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 20, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 20, category: "Utilities" },
  ]);

  const showExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={showExpense}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
