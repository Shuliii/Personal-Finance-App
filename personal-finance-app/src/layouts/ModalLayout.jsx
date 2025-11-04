import styles from "./ModalLayout.module.css";
import Close from "../assets/images/icon-close-modal.svg";
import Button from "../components/button/Button";

const ModalLayout = ({
  type,
  nav,
  name,
  description,
  children,
  onClick,
  handleAddClick,
  handleEditClick,
  addToPotHandler,
}) => {
  let headerHelper = "";
  switch (type) {
    case "Add":
      headerHelper = <h1>Add New {nav}</h1>;
      break;
    case "Edit":
      headerHelper = <h1>Edit {nav}</h1>;
      break;
    case "AddMoney":
      headerHelper = <h1>Add to '{name}'</h1>;
      break;
    case "Withdraw":
      headerHelper = <h1>Withdraw from '{name}'</h1>;
      break;
    default:
      headerHelper = <h1>{nav}</h1>;
      break;
  }

  const handleButtonClick = () => {
    switch (type) {
      case "Add":
        handleAddClick();
        break;
      case "Edit":
        handleEditClick();
        break;
      case "AddMoney":
        addToPotHandler(); // Add a custom handler for AddMoney
        break;
      // case "Withdraw":
      //   handleWithdrawClick(); // Add a custom handler for Withdraw
      //   break;
      default:
        // Optionally handle default case if needed
        console.log("No action for this type");
    }
  };
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          {headerHelper}
          <img src={Close} alt="close" onClick={onClick} />
        </div>
        <div className={styles.modal__description}>{description}</div>
        {children}
        <Button variant="primary" onClick={handleButtonClick}>
          {type === "Add" ? `Add ${nav}` : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};

export default ModalLayout;
