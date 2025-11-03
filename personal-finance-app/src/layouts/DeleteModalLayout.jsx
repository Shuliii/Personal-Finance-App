import styles from "./DeleteModalLayout.module.css";
import Close from "../assets/images/icon-close-modal.svg";
import Button from "../components/button/Button";
import { deleteBudget } from "../store/budgetsSlice";
import { useDispatch } from "react-redux";

const DeleteModalLayout = ({ name, onClick, description }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBudget(name));
    onClick();
  };
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h1>Delete '{name}'?</h1>
          <img src={Close} alt="close" onClick={onClick} />
        </div>
        <div className={styles.modal__description}>{description}</div>
        <div className={styles.buttons__wrapper}>
          <Button variant="destroy" onClick={handleDelete}>
            Yes, Confirm Deletion
          </Button>
          <Button variant="tertiary">No, I want to go back</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalLayout;
