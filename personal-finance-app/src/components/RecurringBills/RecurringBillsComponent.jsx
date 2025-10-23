import styles from "./RecurringBillsComponent.module.css";
import RecurringBillsSummary from "./RecurringBillsSummary";
import RecurringBillsDetails from "./RecurringBillsDetails";

const RecurringBillsComponent = ({ RecurringBills, transactions }) => {
  return (
    <div className={styles.RecurringBills}>
      <RecurringBillsSummary RecurringBills={RecurringBills} />
      <RecurringBillsDetails RecurringBills={RecurringBills} />
    </div>
  );
};

export default RecurringBillsComponent;
