import styles from "./AddNewPot.module.css";
import Backdrop from "./Backdrop";
import Close from "../../assets/images/icon-close-modal.svg";
import Button from "../button/Button";

const AddNewPot = ({onClick}) => {
  const themes = [
    {name: "Green", color: "#00875A"},
    {name: "Blue", color: "#007AFF"},
    {name: "Yellow", color: "#F4B400"},
    {name: "Red", color: "#DB4437"},
    {name: "Purple", color: "#A142F4"},
    {name: "Teal", color: "#00BFA5"},
  ];
  return (
    <>
      <Backdrop onClick={onClick} />
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <h1>Add New Pot</h1>
            <img src={Close} alt="close" onClick={onClick} />
          </div>
          <div className={styles.modal__description}>
            Create a pot to set savings targets. These can help keep you on
            track as you save for special purchases.
          </div>
          <div className={styles.modal__form}>
            <label>
              Pot Name
              <input type="text" name="name"></input>
              <small>30 characters left</small>
            </label>
            <label className={styles.placeholder}>
              Target
              <span className={styles.currency}>$</span>
              <input type="number" name="name"></input>
            </label>
            <label>
              Theme
              <select>
                {themes.map((theme) => (
                  <option key={theme.name} value={theme.name}>
                    {theme.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <Button variant="primary">Add Pot</Button>
        </div>
      </div>
    </>
  );
};

export default AddNewPot;
