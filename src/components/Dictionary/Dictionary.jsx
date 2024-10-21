import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWords } from "../../redux/words/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectWords } from "../../redux/words/selectors";

export default function Dictionary() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const visibleWords = useSelector(selectWords);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllWords());
    }
  }, [dispatch, isLoggedIn]);
  console.log("visibleWords", visibleWords);

  return (
    <div>
      <h2>Dictionary</h2>
      <div>
        {visibleWords.results &&
          visibleWords.results.map((word) => (
            <li key={word._id}>
              {word.en} - {word.ua}
            </li>
          ))}
      </div>
    </div>
  );
}
