import styles from "./RecurringBillsSummary.module.css";
import BillsIcon from "../../assets/images/icon-nav-recurring-bills.svg";

const RecurringBillsSummary = ({ RecurringBills }) => {
  const totalBills = RecurringBills.reduce((acc, x) => acc + x.amount, 0);

  const paidBills = RecurringBills.filter((bill) => {
    const now = new Date();
    const txDate = new Date(bill.date);
    const nextDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      txDate.getDate()
    );
    return now > nextDate;
  });

  const getBillStatus = (bill) => {
    const now = new Date();
    const txDate = new Date(bill.date);
    const nextDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      txDate.getDate()
    );
    if (nextDate < now) nextDate.setMonth(nextDate.getMonth() + 1);

    const diffDays = Math.ceil((nextDate - now) / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    if (diffDays <= 3) return "dueSoon";
    if (diffDays <= 10) return "upcoming";
    return false;
  };

  const dueSoonBills = RecurringBills.filter(
    (bill) => getBillStatus(bill) === "dueSoon"
  );

  const upcomingBills = RecurringBills.filter(
    (bill) => getBillStatus(bill) === "upcoming"
  );

  return (
    <div className={styles.summary__wrapper}>
      <div className={styles.totalBills}>
        <img src={BillsIcon} alt="billsicon" />
        <div className={styles.text}>
          <h1>Total Bills</h1>
          <p>${Math.abs(totalBills)}</p>
        </div>
      </div>
      <div className={styles.summary}>
        <h1>Summary</h1>
        <div className={styles.summary__cards}>
          <div className={styles.summary__card}>
            <h2>Paid Bills</h2>
            <p>{paidBills.length} (${Math.abs(paidBills.reduce((acc, x) => acc + x.amount, 0))})</p>
          </div>
          <div className={styles.summary__card}>
            <h2>Upcoming Bills</h2>
            <p>{upcomingBills.length} (${Math.abs(upcomingBills.reduce((acc, x) => acc + x.amount, 0))})</p>
          </div>
          <div className={styles.summary__card}>
            <h2 className={styles.dueSoon}>Due Soon</h2>
            <p className={styles.dueSoon}>{dueSoonBills.length} (${Math.abs(dueSoonBills.reduce((acc, x) => acc + x.amount, 0))})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringBillsSummary;
