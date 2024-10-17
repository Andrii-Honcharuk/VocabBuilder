import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"),
  password: Yup.string().required("Password is required"),
  // // .matches(
  // //   /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
  // //   "Password must contain at least 6 letters and 1 digit"
  // ),
});

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register, // Реєстрація інпутів
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.registerContainer}>
      <h1 className={css.registerName}>Register</h1>
      <p className={css.registerInfo}>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputContainer}>
          <input
            className={css.nameInput}
            type="text"
            id="name"
            name="name"
            placeholder=" "
            {...register("name")} // Реєстрація поля name
          />
          <label htmlFor="name" className={css.nameLabel}>
            Name
          </label>
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className={css.inputContainer}>
          <input
            className={css.nameInput}
            type="text"
            id="email"
            name="email"
            placeholder=" "
            {...register("email")} // Реєстрація поля email
          />
          <label htmlFor="email" className={css.nameLabel}>
            E-mail
          </label>
          {errors.email && <p>{errors.email.message}</p>}{" "}
        </div>

        <div className={css.inputContainer}>
          <input
            className={css.nameInput}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder=" "
            {...register("password")} // Реєстрація поля password
          />
          <label htmlFor="password" className={css.nameLabel}>
            Password
          </label>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </button>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
