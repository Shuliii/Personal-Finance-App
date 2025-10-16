import styles from "./Pagination.module.css";
import ArrowLeft from "../../assets/images/icon-caret-left.svg";
import ArrowRight from "../../assets/images/icon-caret-right.svg";

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className={styles.pagiNation}>
      <button className={styles.prevPage}>
        <img src={ArrowLeft} alt="arrow left" />
        <span className={styles.arrow__info}>Prev</span>
      </button>
      <div className={styles.pages}>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button className={styles.nextPage}>
        <span className={styles.arrow__info}>Next</span>
        <img src={ArrowRight} alt="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
