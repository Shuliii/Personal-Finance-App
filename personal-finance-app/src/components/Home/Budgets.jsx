import styles from "./Budgets.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";

import { Link } from "react-router-dom";

import PieDiagram from "../PieDiagram";

const Budgets = ({ budgets, className }) => {
  const helper = budgets.map((budget) => (
    <div className={styles.addition__card} key={budget.category}>
      <div
        className={styles.colorBar}
        style={{ backgroundColor: budget.theme }}
      ></div>

      <div className={styles.addition__text}>
        <p>{budget.category}</p>
        <p>$ {budget.maximum}</p>
      </div>
    </div>
  ));
  return (
    <div className={`${styles.budgets__card} ${className || ""}`}>
      <div className={styles.text_wrapper}>
        <h1>Budgets</h1>
        <div className={styles.seeDetails}>
          <Link to="/budget">See Details</Link>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
      <div className={styles.budgets__content}>
        <PieDiagram budgets={budgets} className={styles.pie__chart}/>
        <div className={styles.budgets__additions}>{helper}</div>
      </div>
    </div>
  );
};

export default Budgets;
