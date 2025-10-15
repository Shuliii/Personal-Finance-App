import styles from "./Transactions.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";
import { Link } from "react-router-dom";

const Transactions = ({ transactions, className }) => {
  const edittedTransactions = transactions.slice(0, 5);
  const helper = edittedTransactions.map((transaction) => (
    <div className={styles.transaction} key={transaction.date}>
      <img src={transaction.avatar} alt={transaction.name} />
      <h1>{transaction.name}</h1>
      <div className={styles.right__text}>
        {transaction.amount >= 0 ? (
          <p className={`${styles.money} ${styles.positive}`}>
            +${Math.abs(transaction.amount)}
          </p>
        ) : (
          <p className={`${styles.money} ${styles.negative}`}>
            -${Math.abs(transaction.amount)}
          </p>
        )}

        <p className={styles.dateTime}>
          {new Date(transaction.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  ));
  console.log(edittedTransactions);
  return (
    <div className={`${styles.transactions__card} ${className || ""}`}>
      <div className={styles.text_wrapper}>
        <h1>Transactions</h1>
        <div className={styles.viewAll}>
          <Link to="/transactions">View All</Link>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
      <div className={styles.transactions__wrapper}>{helper}</div>
    </div>
  );
};

export default Transactions;
