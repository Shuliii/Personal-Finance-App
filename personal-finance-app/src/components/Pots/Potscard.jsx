import styles from "./Potscard.module.css";
import Elipsis from "../../assets/images/icon-ellipsis.svg";
import Button from "../button/Button";

const Potscard = ({pot}) => {
  const percent = ((pot.total / pot.target) * 100).toPrecision(3);
  return (
    <div className={styles.potscard}>
      <div className={styles.card__title}>
        <div className={styles.card__title__left}>
          <div
            className={styles.color__circle}
            style={{backgroundColor: `${pot.theme}`}}
          ></div>
          <h1>{pot.name}</h1>
        </div>
        <div className={styles.card__title__right}>
          <img src={Elipsis} alt="elipsis icon" />
        </div>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__header}>
          <p className={styles.content__text}>Total Saved</p>
          <p className={styles.money}>${pot.total}</p>
        </div>
        <div className={styles.card__content__progress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{width: `${percent}%`, backgroundColor: pot.theme}}
            />
          </div>
          <div className={styles.progress__text}>
            <p className={styles.percentage}>{percent}%</p>
            <p className={styles.target}>Target of ${pot.target}</p>
          </div>
        </div>
      </div>
      <div className={styles.card__actions}>
        <Button variant="secondary">+ Add Money</Button>
        <Button variant="secondary">Withdraw</Button>
      </div>
    </div>
  );
};

export default Potscard;
