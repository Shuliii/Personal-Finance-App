import styles from "./AddNewBudget.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {addBudget} from "../../store/budgetsSlice";

const allThemes = [
  {name: "Green", color: "#277c78"},
  {name: "Yellow", color: "#f2cdac"},
  {name: "Cyan", color: "#82c9d7"},
  {name: "Navy", color: "#626070"},
  {name: "Red", color: "#c94736"},
  {name: "Purple", color: "#826cb0"},
  {name: "Pink", color: "#af81ba"},
  {name: "Turquoise", color: "#597c7c"},
  {name: "Brown", color: "#93674f"},
  {name: "Magenta", color: "#934f6f"},
  {name: "Blue", color: "#3f82b2"},
  {name: "Navy Grey", color: "#97a0ac"},
  {name: "Army Green", color: "#7f9161"},
  {name: "Gold", color: "#cab361"},
  {name: "Orange", color: "#be6c49"},
];

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

const AddNewBudget = ({onClick}) => {
  const budgets = useSelector((state) => state.budgets);
  const [form, setForm] = useState({
    category: "",
    maximum: "",
    theme: allThemes[0].color,
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
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  console.log(form);
  return (
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Add"
        nav="Pot"
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
    </>
  );
};

export default AddNewBudget;
