import styles from "./BudgetsDetails.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";
import { Link } from "react-router-dom";

const BudgetsDetails = ({ budgets, transactions }) => {
  const helper = budgets.map((budget) => {
    const spentMoney = transactions
      .filter((transaction) => transaction.category === budget.category)

    const absSpentMoney = Math.abs(spentMoney.reduce((acc, x) => acc + x.amount, 0));
    const percent =
      absSpentMoney > budget.maximum
        ? 100
        : ((absSpentMoney / budget.maximum) * 100).toPrecision(3);

    const tobeInterated = spentMoney.sclice(0,3);
    return (
      <div className={styles.budget__card} key={budget.category}>
        <div className={styles.budget__card__header}>
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: budget.theme }}
          ></div>
          <h1>{budget.category}</h1>
          <p>icon here</p>
        </div>
        <div className={styles.budget__card__content}>
          <p>Maximum of ${budget.maximum}</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%`, backgroundColor: budget.theme }}
            />
          </div>
          <div className={styles.content__details}>
            <div className={styles.content__details__left}>
              <div
                className={styles.colorBar}
                style={{ backgroundColor: budget.theme }}
              ></div>
              <div className={styles.textHelper}>
                <h3>Spent</h3>
                <p>${absSpentMoney}</p>
              </div>
            </div>
            <div className={styles.content__details__right}>
              <div
                className={styles.colorBar}
                style={{ backgroundColor: "#f8f4f0" }}
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
              <Link to="/budget">See Details</Link>
              <img src={ArrowRight} alt="arrow right icon" />
            </div>
          </div>
          <div className={styles.budget__transaction__content}>

          </div>
        </div>
      </div>
    );
  });
  return <div className={styles.BudgetDetails}>{helper}</div>;
};

export default BudgetsDetails;
