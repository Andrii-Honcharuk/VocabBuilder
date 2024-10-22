import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWords } from "../../redux/words/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectWords } from "../../redux/words/selectors";
import WordsPagination from "../WordsPagination/WordsPagination";

export default function Dictionary() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const visibleWords = useSelector(selectWords);

  const totalPages = visibleWords.totalPages;
  // console.log("totalPages", totalPages);
  const currentPage = visibleWords.page;
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllWords({ page: 5, limit: 15 }));
    }
  }, [dispatch, isLoggedIn]);
  // console.log("visibleWords", visibleWords);

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
      <WordsPagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
