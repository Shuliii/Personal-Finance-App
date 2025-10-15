import styles from "./RecurringBills.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";
import { Link } from "react-router-dom";

const RecurringBills = ({ recurring, className }) => {
  return (
    <div className={`${styles.RecurringBills__card} ${className || ""}`}>
      <div className={styles.text_wrapper}>
        <h1>Recurring Bills</h1>
        <div className={styles.seeDetails}>
          <Link to="/recurringBills">See Details</Link>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
      <div className={styles.RecurringBills__content}>
        <div className={`${styles.recurring__bill} ${styles.paid__bills}`}>
          <p className={styles.text}>Paid Bills</p>
          <p className={styles.money}>$190.00</p>
        </div>
        <div className={`${styles.recurring__bill} ${styles.upcoming__bills}`}>
          <p className={styles.text}>Total Upcoming</p>
          <p className={styles.money}>$194.98</p>
        </div>
        <div className={`${styles.recurring__bill} ${styles.duesoon__bills}`}>
          <p className={styles.text}>Paid Bills</p>
          <p className={styles.money}>$59.98</p>
        </div>
      </div>
    </div>
  );
};

export default RecurringBills;
