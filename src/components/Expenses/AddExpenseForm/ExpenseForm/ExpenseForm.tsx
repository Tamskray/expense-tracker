import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, type FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Transaction, addExpense } from "@store/reducers/expenseSlice";

import { useAppDispatch } from "@hooks/redux";

import RadioBtnGroup from "../RadioBtn/RadioBtnGroup";
import { ExpenseFormValues, expenseFormSchema } from "./expenseFormSchema";

import styles from "./ExpenseForm.module.css";

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

  const [transactionType, setTransactionType] = useState<Transaction>("income");

  const handleTransactionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTransactionType(() => e.target.value as Transaction);
  };

  const onSubmit = (values: ExpenseFormValues) => {
    console.log(values);
    dispatch(
      addExpense({
        id: "id" + Date.now(),
        description: values.description,
        amount: values.amount,
        category: values.category,
        transaction_type: transactionType,
      }),
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
        />
        <span>{errors.description?.message}</span>
        <input
          type="number"
          placeholder="amount"
          {...register("amount", { valueAsNumber: true })}
        />
        <span>{errors.amount?.message}</span>

        <input type="text" placeholder="category" {...register("category")} />
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
