import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { login } from "@store/reducers/userSlice";

import { useAppDispatch } from "@hooks/redux";

import { FormValues, formSchema } from "./formSchema";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;

  const onSubmit = (values: FormValues) => {
    console.log(values);
    dispatch(login({ name: values.name, email: values.email }));
  };

  return (
    <>
      <section className={styles["form-section"]}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["login-form"]}
        >
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Name..."
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email..."
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Password</label>
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

      <Link to="/">
        <b>Expenses</b>
      </Link>
    </>
  );
};

export default LoginPage;
