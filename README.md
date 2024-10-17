# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

    <label className={css.label}>
          Email
          <input
            type="email"
            // {...register("email")} // Реєстрація поля email
          />
          {errors.email && <p>{errors.email.message}</p>}{" "}
          {/* Виведення помилки */}
        </label>
        <label className={css.label}>
          Password
          <div className={css.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"} // Зміна типу інпуту
              //   {...register("password")} // Реєстрація поля password
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Тогл видимості пароля
            >
              {showPassword ? "🙈" : "👁️"} {/* Іконка очей */}
            </button>
          </div>
          {errors.password && <p>{errors.password.message}</p>}{" "}
          {/* Виведення помилки */}
        </label>
