import Navigation from "../Navigation/Navigation";
import logo from "../../../public/icons/logo.svg";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export function AppBar() {
  return (
    <header>
      <div className={css.appBarContainer}>
        <div className={css.logoContainer}>
          <a className={css.linkLogo} href="/">
            <img src={logo} alt="logo" width={40} height={40} />
            <p className={css.logoText}>VocabBuilder</p>
          </a>
        </div>
        <Navigation />
        <UserMenu />
      </div>
    </header>
  );
}
