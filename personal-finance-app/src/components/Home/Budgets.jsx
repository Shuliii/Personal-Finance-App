import styles from "./Budgets.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";

const Budgets = () => {
  return (
    <div className={styles.budgets__card}>
      <div className={styles.text_wrapper}>
        <h1>Budgets</h1>
        <div className={styles.seeDetails}>
          <p>See Details</p>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
    </div>
  );
};

export default Budgets;
