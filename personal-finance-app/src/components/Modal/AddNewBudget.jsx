import styles from "./AddNewBudget.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addBudget } from "../../store/budgetsSlice";
import { createPortal } from "react-dom";
import { allThemes } from "../../data/allThemes";

const allCategories = [
  "Entertainment",
  "Bills",
  "Groceries",
  "Dining Out",
  "Transportation",
  "Personal Care",
  "Education",
  "Lifestyle",
  "Shopping",
  "General",
];

const description = (
  <p>
    Choose a category to set a spending budget. These categories can help you
    monitor spending.
  </p>
);

const AddNewBudget = ({ onClick }) => {
  const budgets = useSelector((state) => state.budgets);
  const [form, setForm] = useState({
    category: "",
    maximum: "",
    theme: allThemes[0].color.toUpperCase(),
  });
  const dispatch = useDispatch();

  const usedThemes = budgets.map((b) => b.theme.toLowerCase());

  const usedCategories = budgets.map((b) => b.category);
  const availableCategories = allCategories.filter(
    (cat) => !usedCategories.includes(cat)
  );

  const handleAddClick = () => {
    const matchedTheme = allThemes.find(
      (theme) => theme.name.toLowerCase() === form.theme.toLowerCase()
    );

    const newBudget = {
      category: form.category,
      maximum: form.maximum,
      theme: matchedTheme ? matchedTheme.color.toUpperCase() : "#277C78",
    };
    dispatch(addBudget(newBudget));
    onClick();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return createPortal(
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Add"
        nav="Budget"
        description={description}
        onClick={onClick}
        handleAddClick={handleAddClick}
      >
        <div className={styles.modal__form}>
          <label>
            Budget Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              {availableCategories.length === 0 ? (
                <option disabled>All categories used</option>
              ) : (
                availableCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))
              )}
            </select>
          </label>
          <label className={styles.placeholder}>
            Maximum Spend
            <span className={styles.currency}>$</span>
            <input
              type="number"
              name="maximum"
              value={form.maximum}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Theme
            <select name="theme" value={form.theme} onChange={handleChange}>
              {allThemes.map((theme) => (
                <option
                  key={theme.name}
                  value={theme.name}
                  disabled={usedThemes.includes(theme.color)}
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

export default AddNewBudget;
