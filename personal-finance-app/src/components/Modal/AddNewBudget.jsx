import styles from "./AddNewBudget.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";

const AddNewBudget = ({ onClick }) => {
  const themes = [
    { name: "Green", color: "#00875A" },
    { name: "Blue", color: "#007AFF" },
    { name: "Yellow", color: "#F4B400" },
    { name: "Red", color: "#DB4437" },
    { name: "Purple", color: "#A142F4" },
    { name: "Teal", color: "#00BFA5" },
  ];
  const description = (
    <p>
      Choose a category to set a spending budget. These categories can help you
      monitor spending.
    </p>
  );
  return (
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Add"
        nav="Pot"
        description={description}
        onClick={onClick}
      >
        <div className={styles.modal__form}>
          <label>
            Budget Category
            <select>
              <option>Entertainment</option>
            </select>
          </label>
          <label className={styles.placeholder}>
            Maximum Spend
            <span className={styles.currency}>$</span>
            <input type="number" name="maximum"></input>
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
      </ModalLayout>
    </>
  );
};

export default AddNewBudget;
