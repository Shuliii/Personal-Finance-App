import styles from "./ModalLayout.module.css";
import Close from "../assets/images/icon-close-modal.svg";
import Button from "../components/button/Button";

const ModalLayout = ({
  type,
  nav,
  description,
  children,
  onClick,
  handleAddClick,
}) => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h1>{type === "Add" ? `Add  New ${nav}` : `Edit ${nav}`}</h1>
          <img src={Close} alt="close" onClick={onClick} />
        </div>
        <div className={styles.modal__description}>{description}</div>
        {children}
        <Button variant="primary" onClick={type === "Add" && handleAddClick}>
          {type === "Add" ? `Add ${nav}` : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};

export default ModalLayout;
