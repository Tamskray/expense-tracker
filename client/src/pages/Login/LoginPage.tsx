import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { getExpenses } from "@store/reducers/expenseSlice";
import {
  login,
  selectAccessToken,
  selectUserId,
} from "@store/reducers/userSlice";

import { useAppDispatch, useAppSelector } from "@hooks/redux";

import { FormValues, formSchema } from "./formSchema";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  const token = useAppSelector(selectAccessToken);

  useEffect(() => {
    if (userId !== null) {
      dispatch(getExpenses({ userId, token }));
    }
  }, [userId, token, dispatch]);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;

  const onSubmit = async (values: FormValues) => {
    try {
      await dispatch(
        login({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      );
    } catch (error) {
      console.log("Login error", error);
    }
  };

  return (
    <>
      <section className={styles["form-section"]}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["login-form"]}
        >
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Name..."
          />
          <span>{errors.name?.message}</span>

          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email..."
          />
          <span>{errors.email?.message}</span>

          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Password..."
          />
          <span>{errors.password?.message}</span>

          <button type="submit" className={styles["login-btn"]}>
            Enter
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
