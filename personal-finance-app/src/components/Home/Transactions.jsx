import styles from "./Transactions.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";

const Transactions = ({transactions}) => {
  const edittedTransactions = transactions.slice(0, 5);
  console.log(edittedTransactions);
  return (
    <div className={styles.transactions__card}>
      <div className={styles.text_wrapper}>
        <h1>Transactions</h1>
        <div className={styles.viewAll}>
          <p>View All</p>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
