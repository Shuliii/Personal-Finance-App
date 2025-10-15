import styles from "./Balance.module.css";

const Balance = ({ balance, className }) => {
  return (
    <div className={`${styles.balance__wrapper} ${className || ""}`}>
      <div className={`${styles.card} ${styles.currentBalance}`}>
        <p>Current Balance</p>$
        {balance.current.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
      <div className={`${styles.card} ${styles.income}`}>
        <p>Income</p>$
        {balance.income.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
      <div className={`${styles.card} ${styles.expenses}`}>
        <p>Expenses</p>$
        {balance.expenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
    </div>
  );
};

export default Balance;
