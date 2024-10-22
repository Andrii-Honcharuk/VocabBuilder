import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOutUser } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <div className={css.wrapper}>
          <div className={css.username}>
            {user.name}
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
            onClick={() => dispatch(logOutUser())}
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
      )}
    </>
  );
}
