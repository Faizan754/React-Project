import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./ExpenseCategories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be atleast 3 characters!" }),
  amount: z.number({ invalid_type_error: "Amount is required!" }).min(0.01),
  category: z.string().min(1, { message: "Category is required!" }),
});

type FormData = z.infer<typeof schema>;

interface ExpenseList {
  onSubmit: (data: FormData) => void;
}

function ExpenseForm({ onSubmit }: ExpenseList) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <label className="form-label" htmlFor="description">
        Description
      </label>
      <input
        {...register("description")}
        id="description"
        type="text"
        className="form-control"
      ></input>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <label className="mt-3 form-label" htmlFor="amount">
        Amount
      </label>
      <input
        {...register("amount", { valueAsNumber: true })}
        id="amount"
        type="number"
        className="form-control"
      ></input>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <label htmlFor="category" className="mt-3 form-label">
        Category
      </label>
      <select {...register("category")} className="form-select" id="category">
        <option value=""></option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}
      <button className="mt-3 btn btn-primary">Submit</button>
    </form>
  );
}

export default ExpenseForm;
