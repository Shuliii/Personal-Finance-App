import styles from "./AddNewPot.module.css";
import Backdrop from "./Backdrop";
// import Close from "../assets/images/icon-close-modal.svg";
import Close from "../../assets/images/icon-close-modal.svg";

const AddNewPot = ({ onClick }) => {
  return (
    <>
      <Backdrop onClick={onClick} />
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <h1>Add New Pot</h1>
            <img src={Close} alt="close" onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPot;
