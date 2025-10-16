import styles from "./TransactionControls.module.css";

import SortIcon from "../../assets/images/icon-sort-mobile.svg";
import FilterIcon from "../../assets/images/icon-filter-mobile.svg";
import SearchIcon from "../../assets/images/icon-search.svg";
import ArrowDown from "../../assets/images/icon-caret-down.svg";

const TransactionControls = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.search}>
        <input type="text" placeholder="Search transaction" />
        <img
          className={styles.search__icon}
          src={SearchIcon}
          alt="search icon"
        />
      </div>
      <div className={styles.sort}>
        <img className={styles.sort__icon} src={SortIcon} alt="sort icon" />
        <label className={styles.sort__tablet}>
          Sort by
          <select>
            <option>Latest</option>
            <option>Oldest</option>
            <option>A to Z</option>
            <option>Z to A</option>
            <option>Highest</option>
            <option>Lowest</option>
          </select>
          <img className={styles.arrowdown} src={ArrowDown} alt="arrow down" />
        </label>
      </div>
      <div className={styles.filter}>
        <img
          className={styles.filter__icon}
          src={FilterIcon}
          alt="filter icon"
        />
        <label className={styles.filter__tablet}>
          Category
          <select>
            <option>All Transactions</option>
            <option>Entertainment</option>
            <option>Bills</option>
            <option>Groceries</option>
            <option>Dining Out</option>
            <option>Transportation</option>
          </select>
          <img className={styles.arrowdown} src={ArrowDown} alt="arrow down" />
        </label>
      </div>
    </div>
  );
};

export default TransactionControls;
