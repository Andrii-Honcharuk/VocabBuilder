import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
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

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  // const [passwordValue, setPasswordValue] = useState("");

  const {
    register, // Реєстрація інпутів
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
    console.log("data", data);
    dispatch(registerNewUser(data));
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
            className={css.formInput}
            type="text"
            id="name"
            name="name"
            placeholder=" "
            {...register("name")} // Реєстрація поля name
          />
          <label htmlFor="name" className={style}>
            Name
          </label>
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className={css.inputContainer}>
          <input
            className={css.formInput}
            type="text"
            id="email"
            name="email"
            placeholder=" "
            {...register("email")} // Реєстрація поля email
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
            {...register("password")} // Реєстрація поля password
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
          Register
        </button>
      </form>

      <Link to="/login" className={css.textLogin}>
        Login
      </Link>
    </div>
  );
}
