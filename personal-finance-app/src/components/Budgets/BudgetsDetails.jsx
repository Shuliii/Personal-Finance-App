import styles from "./BudgetsDetails.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";
import {Link} from "react-router-dom";
import Elipsis from "../../assets/images/icon-ellipsis.svg";
import {useState, useRef, useEffect} from "react";

const BudgetsDetails = ({budgets, transactions}) => {
  const [open, setOpen] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (category) => {
    setOpen((prev) => (prev === category ? null : category));
  };

  // close dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const helper = budgets.map((budget) => {
    const spentMoney = transactions.filter(
      (transaction) => transaction.category === budget.category
    );
    const absSpentMoney = Math.abs(
      spentMoney.reduce((acc, x) => acc + x.amount, 0)
    );
    const percent =
      absSpentMoney > budget.maximum
        ? 100
        : ((absSpentMoney / budget.maximum) * 100).toPrecision(3);

    const tobeInterated = spentMoney.slice(0, 3);
    return (
      <div className={styles.budget__card} key={budget.category}>
        <div className={styles.budget__card__header}>
          <div
            className={styles.colorCircle}
            style={{backgroundColor: budget.theme}}
          ></div>
          <h1>{budget.category}</h1>
          <img
            src={Elipsis}
            alt="elipsis icon"
            onClick={() => toggleMenu(budget.category)}
          />
          {open === budget.category && (
            <div className={styles.dropdown}>
              <button onClick={() => console.log("Edit Budget")}>
                Edit Budget
              </button>
              <button onClick={() => console.log("Delete Budget")}>
                Delete Budget
              </button>
            </div>
          )}
        </div>
        <div className={styles.budget__card__content}>
          <p>Maximum of ${budget.maximum}</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{width: `${percent}%`, backgroundColor: budget.theme}}
            />
          </div>
          <div className={styles.content__details}>
            <div className={styles.content__details__left}>
              <div
                className={styles.colorBar}
                style={{backgroundColor: budget.theme}}
              ></div>
              <div className={styles.textHelper}>
                <h3>Spent</h3>
                <p>${absSpentMoney}</p>
              </div>
            </div>
            <div className={styles.content__details__right}>
              <div
                className={styles.colorBar}
                style={{backgroundColor: "#f8f4f0"}}
              ></div>
              <div className={styles.textHelper}>
                <h3>Free</h3>
                <p>
                  {absSpentMoney > budget.maximum
                    ? `$0`
                    : `$${budget.maximum - absSpentMoney}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.budget__transaction}>
          <div className={styles.budget__transaction__header}>
            <h1>Latest Spending</h1>
            <div className={styles.seeDetails}>
              <Link to="/budget">See All</Link>
              <img src={ArrowRight} alt="arrow right icon" />
            </div>
          </div>
          <div className={styles.budget__transaction__content}>
            {tobeInterated.map((item, index) => (
              <div className={styles.transaction__card} key={index}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className={styles.avatar}
                />
                <h2>{item.name}</h2>
                <div className={styles.transaction__right__text}>
                  <p className={styles.money}>
                    -${Math.abs(item.amount).toFixed(2)}
                  </p>
                  <p className={styles.date}>
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });
  return <div className={styles.BudgetDetails}>{helper}</div>;
};

export default BudgetsDetails;
