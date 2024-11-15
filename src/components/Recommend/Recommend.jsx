import { useDispatch, useSelector } from "react-redux";
import { fetchAllWords } from "../../redux/words/operations";
import { useEffect } from "react";
import WordsPagination from "../WordsPagination/WordsPagination";
import { selectStateWords, selectWords } from "../../redux/words/selectors";

export default function Recommend() {
  const dispatch = useDispatch();
  const { currentPage, loading } = useSelector(selectStateWords);
  const words = useSelector(selectWords);
  console.log("words", words.results);

  useEffect(() => {
    dispatch(fetchAllWords({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <div>
      <h1>Recommended Words</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {words.results.map((word) => (
            <li key={word._id}>
              {word.en} - {word.ua}
            </li>
          ))}
        </ul>
      )}
      <WordsPagination />
    </div>
  );
}
