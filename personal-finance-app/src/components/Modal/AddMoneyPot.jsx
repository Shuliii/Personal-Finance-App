import styles from "./AddMoneyPot.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addMoney } from "../../store/potsSlice";

const description = (
  <p>
    Add money to your pot to keep it separate from your main balance. As soon as
    you add this money, it will be deducted from your current balance.
  </p>
);

const AddMoneyPot = ({ onClick, name }) => {
  const dispatch = useDispatch();
  const pots = useSelector((state) => state.pots);
  const pot = pots.find((p) => p.name === name);
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);
  };
  const percent = (((pot.total + amount) / pot.target) * 100).toFixed(2);

  const addToPotHandler = () => {
    const newPot = {
      name: pot.name,
      target: pot.target,
      total: pot.total + amount,
      theme: pot.theme,
    };
    dispatch(addMoney(newPot));
    onClick();
  };

  return createPortal(
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="AddMoney"
        name={name}
        description={description}
        onClick={onClick}
        addToPotHandler={addToPotHandler}
      >
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <div className={styles.modal__title}>
              <p className={styles.modal__text}>New Amount</p>
              <p className={styles.money}>
                $
                {amount > 0
                  ? (pot.total + amount).toFixed(2)
                  : pot.total.toFixed(2)}
              </p>
            </div>
            <div className={styles.card__content__progress}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${percent}%`,
                    backgroundColor: pot.theme,
                  }}
                />
              </div>

              <div className={styles.progress__text}>
                <p className={styles.percentage}>{percent}%</p>
                <p className={styles.target}>Target of ${pot.target}</p>
              </div>
            </div>
          </div>

          <div className={styles.modal__form}>
            <label className={styles.placeholder}>
              Amount to Add
              <span className={styles.currency}>$</span>
              <input
                type="number"
                name="target"
                value={amount}
                onChange={handleChange}
              ></input>
            </label>
          </div>
        </div>
      </ModalLayout>
    </>,
    document.body
  );
};

export default AddMoneyPot;
