import categories from "./ExpenseCategories";

interface Props {
  onSelect: (category: string) => void;
}

function ExpenseFilter({ onSelect }: Props) {
  return (
    <select className="form-select" onChange={(e) => onSelect(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
