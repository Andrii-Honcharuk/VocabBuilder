import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Password must contain at least 6 letters and 1 digit"
    ),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  // const [passwordValue, setPasswordValue] = useState("");

  const {
    register: login, // Реєстрація інпутів
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const nameValue = watch("name");
  // const emailValue = watch("email");
  const passValue = watch("password");

  function notEmpty(value) {
    return value === undefined
      ? `${css.formLabel} ${css.classHigh}`
      : `${css.formLabel}`;
  }
  const style = notEmpty(passValue); //для стилів при автозаповненні

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    console.log(data);
  };

  return (
    <div className={css.registerContainer}>
      <h1 className={css.registerName}>Login</h1>
      <p className={css.registerInfo}>
        Please enter your login details to continue using our service:
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputContainer}>
          <input
            className={css.formInput}
            type="text"
            id="email"
            name="email"
            placeholder=" "
            {...login("email")} // Реєстрація поля email
          />
          <label htmlFor="email" className={style}>
            E-mail
          </label>
          {errors.email && <p>{errors.email.message}</p>}{" "}
        </div>

        <div className={css.inputContainer}>
          <input
            className={css.formInput}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder=" "
            {...login("password")} // Реєстрація поля password
          />
          <label htmlFor="password" className={style}>
            Password
          </label>
          {passValue !== "" && (
            <button
              className={css.ayeBtn}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button className={css.btn} type="submit">
          Login
        </button>
      </form>

      <Link to="/register" className={css.textRegister}>
        Register
      </Link>
    </div>
  );
}
