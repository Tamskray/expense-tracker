import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, type FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Transaction, addExpense } from "@store/reducers/expenseSlice";
import { selectUserId } from "@store/reducers/userSlice";

import { useAppDispatch, useAppSelector } from "@hooks/redux";

import { useTranslation } from "react-i18next";

import ButtonHex from "@components/UI/Button/ButtonHex";

import RadioBtnGroup from "../RadioBtn/RadioBtnGroup";
import { ExpenseFormValues, expenseFormSchema } from "./expenseFormSchema";

import styles from "./ExpenseForm.module.css";

const ExpenseForm: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

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
    if (userId !== null) {
      dispatch(
        addExpense({
          userId,
          expense: {
            // id: "id" + Date.now(),
            description: values.description,
            amount: values.amount,
            category: values.category,
            transaction_type: transactionType,
          },
        }),
      );
    }
  };

  return (
    <>
      <div className={styles["add-new-tranaction-header"]}>
        <h2>{t("addTransaction")}</h2>
        <hr />
      </div>

      <section className={styles["expense-section"]}>
        <form
          id="expense-form"
          onSubmit={handleSubmit(onSubmit)}
          className={styles["expense-form"]}
        >
          <input
            type="text"
            placeholder={t("descriptionPlaceholder")}
            {...register("description")}
          />
          <span>{errors.description?.message}</span>

          <input
            type="number"
            step="0.01"
            {...register("amount", { valueAsNumber: true })}
          />
          <span>{errors.amount?.message}</span>

          <input
            type="text"
            placeholder={t("categoryPlaceholder")}
            {...register("category")}
          />
          <span>{errors.category?.message}</span>

          <RadioBtnGroup
            selectedValue={transactionType}
            handleChange={handleTransactionChange}
          />

          <ButtonHex formId="expense-form" />
        </form>
      </section>
    </>
  );
};

export default ExpenseForm;
