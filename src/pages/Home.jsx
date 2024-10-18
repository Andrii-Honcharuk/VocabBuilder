import css from "./Home.module.css";
// import Register from "./Register";

export default function Home({ children }) {
  return (
    <div className={css.homePageContainer}>
      <div className={css.loginRegContainer}>
        {children}
        {/* <Register /> */}
      </div>
      <div className={css.gradientContainer}>
        <div className={css.imgContainer}>
          <img
            className={css.img}
            src="../../public/icons/illustration.png"
            alt="man with girl reading book and learning"
          />
          <p className={css.textImg}>Word · Translation · Grammar · Progress</p>
        </div>
      </div>
    </div>
  );
}
