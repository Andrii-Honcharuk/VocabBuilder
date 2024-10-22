// import { useSelector } from "react-redux";
// import { setPage } from "../../redux/words/slice";
// import { fetchAllWords } from "../../redux/words/operations";
// import { selectWords } from "../../redux/words/selectors";

export default function WordsPagination({ totalPages, currentPage }) {
  //   const dispatch = useDispatch();
  //   const totalPages = useSelector(selectWords);
  //   const currentPage = useSelector(selectWords);
  // console.log("totalPages", totalPages);
  // console.log("currentPage", currentPage);

  return (
    <div>
      <button>{"<<"}</button>
      <ul>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <li key={index}>
              <button disabled={index + 1 === currentPage}>{index + 1}</button>
            </li>
          );
        })}
      </ul>
      <button>{">>"}</button>
    </div>
  );
}
