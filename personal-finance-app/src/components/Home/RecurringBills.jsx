import styles from "./RecurringBills.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";

const RecurringBills = ({ recurring }) => {
  return (
    <div className={styles.RecurringBills__card}>
      <div className={styles.text_wrapper}>
        <h1>Recurring Bills</h1>
        <div className={styles.seeDetails}>
          <p>See Details</p>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
      <div className={styles.RecurringBills__content}></div>
    </div>
  );
};

export default RecurringBills;
