import styles from "./TransactionsCard.module.css";
import TransactionControls from "./TransactionControls";
import Pagination from "./Pagination";
import {useState} from "react";

const TransactionsCard = ({transactions}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const totalPages = Math.ceil(transactions.length / itemPerPage);

  const renderedList = transactions.slice(startIndex, endIndex);

  const helper = renderedList.map((list, index) => (
    <div className={styles.transaction} key={index}>
      <img src={list.avatar} alt={list.name} />
      <div className={styles.details}>
        <h1>{list.name}</h1>
        <p>{list.category}</p>
      </div>
      <div className={styles.right__text}>
        {list.amount >= 0 ? (
          <p className={`${styles.money} ${styles.positive}`}>
            +${Math.abs(list.amount)}
          </p>
        ) : (
          <p className={`${styles.money} ${styles.negative}`}>
            -${Math.abs(list.amount)}
          </p>
        )}

        <p className={styles.dateTime}>
          {new Date(list.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  ));

  return (
    <div className={styles.transactions}>
      <TransactionControls />
      <div className={styles.transactions__wrapper}>{helper}</div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TransactionsCard;