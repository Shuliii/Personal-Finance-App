import styles from "./Pots.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";
import PotsIcon from "../../assets/images/icon-pot.svg?react";

const Pots = ({pots}) => {
  const totalPots = pots
    .reduce((accumulator, pot) => {
      return accumulator + pot.total;
    }, 0)
    .toLocaleString("en-US");

  const edittedPots = pots.slice(0, 4);
  const helper = edittedPots.map((pot) => {
    return (
      <div className={styles.addition__card} key={pot.name}>
        <div
          className={styles.colorBar}
          style={{backgroundColor: pot.theme}}
        ></div>

        <div className={styles.addition__text}>
          <p>{pot.name}</p>
          <p>$ {pot.total}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.pots__card}>
      <div className={styles.text_wrapper}>
        <h1>Pots</h1>
        <div className={styles.seeDetails}>
          <p>See Details</p>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
      <div className={styles.pots__content}>
        <div className={styles.pots__saved}>
          <PotsIcon />
          <div className={styles.pots__text}>
            <p>Total Saved</p>
            <p>$ {totalPots}</p>
          </div>
        </div>
        <div className={styles.pots__additions}>{helper}</div>
      </div>
    </div>
  );
};

export default Pots;
