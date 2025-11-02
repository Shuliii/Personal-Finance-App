import styles from "./EditBudget.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import {createPortal} from "react-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

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

const description = (
  <p>As your budgets change, feel free to update your spending limits.</p>
);

const EditBudget = ({onClick, category}) => {
  const budgets = useSelector((state) => state.budgets);
  const selectedBudget = budgets.find((b) => b.category === category);

  const [budget, setBudget] = useState(selectedBudget);
  const usedThemes = budgets.map((b) => b.theme.toLowerCase());

  const currentTheme =
    allThemes.find((t) => t.color.toLowerCase() === budget.theme.toLowerCase())
      ?.name || "";

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBudget((prev) => ({...prev, [name]: value}));
  };
  console.log(budget);
  return createPortal(
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Edit"
        nav="Budget"
        description={description}
        onClick={onClick}
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
            <select name="theme" value={currentTheme} onChange={handleChange}>
              {allThemes.map((theme) => (
                <option
                  key={theme.name}
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

export default EditBudget;
