import styles from "./BudgetsSummary.module.css";
import PieDiagram from "../PieDiagram";

const BudgetSummary = ({budgets}) => {
  const helper = budgets.map((budget) => (
    <div className={styles.summary__card} key={budget.category}>
      <div
        className={styles.colorBar}
        style={{backgroundColor: budget.theme}}
      ></div>
      <h2>{budget.category}</h2>
      <div className={styles.right__text}>$250 from ${budget.maximum}</div>
    </div>
  ));
  return (
    <div className={styles.summary}>
      <PieDiagram budgets={budgets} className={styles.pie__chart} />
      <div className={styles.spending__summary}>
        <h1>Spending Summary</h1>
        <div className={styles.summary__card__wrapper}>{helper}</div>
      </div>
    </div>
  );
};

export default BudgetSummary;
