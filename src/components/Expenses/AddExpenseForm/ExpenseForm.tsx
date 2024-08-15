import { ChangeEvent, useState, type FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { addExpense, Transaction } from "../../../store/reducers/expenseSlice";
import RadioBtnGroup from "./RadioBtnGroup";

import styles from "./ExpenseForm.module.css";
import { useForm } from "react-hook-form";
import { expenseFormSchema, ExpenseFormValues } from "./expenseFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const ExpenseForm: FC = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState } = useForm<ExpenseFormValues>({
    defaultValues: {
      description: "",
      amount: 0,
      category: "",
      transaction_type: "income",
    },
    resolver: zodResolver(expenseFormSchema),
  });

  const { errors } = formState;

  // const [description, setDescription] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [category, setCategory] = useState("");

  const [transactionType, setTransactionType] = useState<Transaction>("income");

  const handleTransactionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTransactionType(() => e.target.value as Transaction);
  };

  const onSubmit = (values: ExpenseFormValues) => {
    // e.preventDefault();
    console.log(values);
    dispatch(
      addExpense({
        id: "id" + Date.now(),
        description: values.description,
        amount: values.amount,
        category: values.category,
        transaction_type: transactionType,
      })
    );
  };

  return (
    <section className={styles["expense-section"]}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles["expense-form"]}
      >
        <input
          type="text"
          placeholder="description"
          {...register("description")}
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
        />
        <span>{errors.description?.message}</span>
        <input
          type="number"
          placeholder="amount"
          {...register("amount", { valueAsNumber: true })}
          // value={amount}
          // onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <span>{errors.amount?.message}</span>

        <input
          type="text"
          placeholder="category"
          {...register("category")}
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
        />
        <span>{errors.category?.message}</span>

        <RadioBtnGroup
          selectedValue={transactionType}
          handleChange={handleTransactionChange}
        />

        <button type="submit">Add transaction</button>
      </form>
    </section>
  );
};

export default ExpenseForm;
