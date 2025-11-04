import styles from "./Potscard.module.css";
import Elipsis from "../../assets/images/icon-ellipsis.svg";
import Button from "../button/Button";
import { useState } from "react";
import DeletePot from "../Modal/DeletePot";
import EditPot from "../Modal/EditPot";
import AddMoneyPot from "../Modal/AddMoneyPot";
import WithdrawMoneyPot from "../Modal/WithdrawMoneyPot";

const Potscard = ({ pot, open, onToggle }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);

  const percent = ((pot.total / pot.target) * 100).toPrecision(3);
  return (
    <>
      <div className={styles.potscard}>
        <div className={styles.card__title}>
          <div className={styles.card__title__left}>
            <div
              className={styles.color__circle}
              style={{ backgroundColor: `${pot.theme}` }}
            ></div>
            <h1>{pot.name}</h1>
          </div>
          <img src={Elipsis} alt="elipsis icon" onClick={onToggle} />
          {open && (
            <div className={styles.dropdown}>
              <button
                className={styles.edit}
                onClick={() => setEditModal(pot.name)}
              >
                Edit Pot
              </button>
              <button
                className={styles.delete}
                onClick={() => setDeleteModal(pot.name)}
              >
                Delete Pot
              </button>
            </div>
          )}
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
                style={{ width: `${percent}%`, backgroundColor: pot.theme }}
              />
            </div>
            <div className={styles.progress__text}>
              <p className={styles.percentage}>{percent}%</p>
              <p className={styles.target}>Target of ${pot.target}</p>
            </div>
          </div>
        </div>
        <div className={styles.card__actions}>
          <Button variant="secondary" onClick={() => setAddModal(pot.name)}>
            + Add Money
          </Button>
          <Button variant="secondary">Withdraw</Button>
        </div>
      </div>
      {editModal && (
        <EditPot
          onClick={() => {
            onToggle();
            setEditModal(false);
          }}
          category={editModal}
        />
      )}
      {deleteModal && (
        <DeletePot
          onClick={() => {
            onToggle();
            setDeleteModal(false);
          }}
          name={deleteModal}
        />
      )}
      {addModal && (
        <AddMoneyPot
          onClick={() => {
            setAddModal(false);
          }}
          name={addModal}
        />
      )}
    </>
  );
};

export default Potscard;
