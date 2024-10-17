// UserMenu.jsx;

// import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
// import { selectUser } from "../../redux/auth/selectors";
// import { logOut } from "../../redux/auth/operations";
// import userIcon from "../../../public\icons\usericon.svg";
export default function UserMenu() {
  // const dispatch = useDispatch()
  // const user = useSelector(selectUser) || { UserName: { name: Username } };

  return (
    <div className={css.wrapper}>
      <div className={css.username}>
        Username
        <div className={css.userIcon}>
          <img
            src="../../../public/icons/usericon.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </div>
      </div>
      <button
        className={css.btnLogout}
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        <span>Log out</span>
        <img
          src="../../../public/icons/arrow-right.svg"
          alt="arrow-right            "
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}
