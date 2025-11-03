import styles from "./EditBudget.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editBudget } from "../../store/budgetsSlice";
import { allThemes } from "../../data/allThemes";

const description = (
  <p>As your budgets change, feel free to update your spending limits.</p>
);

const EditBudget = ({ onClick, category }) => {
  const dispatch = useDispatch();
  const budgets = useSelector((state) => state.budgets);
  const selectedBudget = budgets.find((b) => b.category === category);

  const [budget, setBudget] = useState({
    category: selectedBudget.category,
    maximum: selectedBudget.maximum,
    theme: selectedBudget.theme.toLowerCase(),
  });

  const usedThemes = budgets.map((b) => b.theme.toLowerCase());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    const newBudget = {
      category: budget.category,
      maximum: budget.maximum,
      theme: budget.theme.toUpperCase(),
    };
    dispatch(editBudget(newBudget));
    onClick();
  };

  return createPortal(
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Edit"
        nav="Budget"
        description={description}
        onClick={onClick}
        handleEditClick={handleEditClick}
      >
        <div className={styles.modal__form}>
          <label>
            Budget Category
            <select name="category" disabled>
              <option>{budget.category}</option>
            </select>
          </label>
          <label className={styles.placeholder}>
            Maximum Spend
            <span className={styles.currency}>$</span>
            <input
              type="number"
              name="maximum"
              value={budget.maximum}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Theme
            <select name="theme" value={budget.theme} onChange={handleChange}>
              {allThemes.map((theme) => (
                <option
                  key={theme.color}
                  value={theme.color} // ✅ store hex, show name
                  disabled={
                    usedThemes.includes(theme.color.toLowerCase()) &&
                    theme.color !== selectedBudget.theme
                  }
                >
                  {theme.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </ModalLayout>
    </>,
    document.body
  );
};

export default EditBudget;
