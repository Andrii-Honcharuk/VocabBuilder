//Navigation.jsx

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

const makeActiveClass = ({ isActive }) => {
  // console.log(isActive);
  return `${isActive && css.isActive} ${css.link}`;
};

export default function Navigation() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.linksContainer}>
      <NavLink to="/dictionary" className={makeActiveClass}>
        Dictionary
      </NavLink>

      <NavLink to="/recommend" className={makeActiveClass}>
        Recommend
      </NavLink>
      <NavLink to="/training" className={makeActiveClass}>
        Training
      </NavLink>
    </nav>
  );
}
