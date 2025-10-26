import styles from "./RecurringBillsDetails.module.css";
import SortIcon from "../../assets/images/icon-sort-mobile.svg";

const RecurringBillsDetails = ({ RecurringBills }) => {
  const uniqueBills = RecurringBills.filter((bill, index, self) => {
    return index === self.findIndex((t) => t.name === bill.name);
  });

  const sortedBills = uniqueBills.sort((a, b) => {
    const aNextDate = new Date(a.date).getDate();
    const bNextDate = new Date(b.date).getDate();

    return aNextDate - bNextDate; // Compare next occurrence dates
  });

  const helper = sortedBills.map((bill) => {
    function getOrdinal(number) {
      const suffixes = ["th", "st", "nd", "rd"];
      const value = number % 100;
      return (
        number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
      );
    }
    return (
      <div className={styles.card} key={bill.name}>
        <div className={styles.billTitle}>
          <img src={bill.avatar} />
          <h1>{bill.name}</h1>
        </div>
        <div className={styles.billDetails}>
          <div className={styles.dueDate}>
            Monthly-{getOrdinal(new Date(bill.date).getDate())}
          </div>
          <div className={styles.amount}>$250</div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.details__wrapper}>
      <div className={styles.details__control}>
        <input type="text" placeholder="Search bills"></input>
        <img src={SortIcon} alt="sort icon" className={styles.sortIcon} />
        <label className={styles.sortBy}>
          Sort By
          <select>
            <option>Latest</option>
            <option>Oldest</option>
            <option>A to Z</option>
            <option>Z to A</option>
            <option>Highest</option>
            <option>Lowest</option>
          </select>
        </label>
      </div>
      <div className={styles.listHeader}>
        <span>Bill Title</span>
        <span className={styles.listHeader__details}>
          <p>Due Date</p>
          <p>Amount</p>
        </span>
      </div>
      <div className={styles.details__card__wrapper}>{helper}</div>
    </div>
  );
};

export default RecurringBillsDetails;
