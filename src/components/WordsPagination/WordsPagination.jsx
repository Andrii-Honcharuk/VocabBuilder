import { useDispatch, useSelector } from "react-redux";
import { fetchAllWords } from "../../redux/words/operations";
import { setPage } from "../../redux/words/slice";

export default function WordsPagination() {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector((state) => state.words);

  console.log("totalPages", totalPages);
  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchAllWords({ page }));
  };
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <button>{"<<"}</button>
      <ul>
        {pages.map((page) => {
          return (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                disabled={page === currentPage}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <button>{">>"}</button>
    </div>
  );
}
