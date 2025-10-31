import styles from "./AddNewPot.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {addPots} from "../../store/potsSlice.js";

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
  <p>
    Create a pot to set savings targets. These can help keep you on track as you
    save for special purchases.
  </p>
);

const AddNewPot = ({onClick}) => {
  const pots = useSelector((state) => state.pots);
  const [form, setForm] = useState({
    name: "",
    target: "",
    total: 0,
    theme: allThemes[0].color.toUpperCase(),
  });
  const dispatch = useDispatch();
  const usedThemes = pots.map((b) => b.theme.toLowerCase());

  const handleAddClick = () => {
    const matchedTheme = allThemes.find(
      (theme) => theme.name.toLowerCase() === form.theme.toLowerCase()
    );

    const newPots = {
      name: form.name,
      target: form.target,
      total: 0,
      theme: matchedTheme ? matchedTheme.color.toUpperCase() : "#277C78",
    };

    console.log(newPots);
    dispatch(addPots(newPots));
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
            Pot Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            ></input>
            <small>30 characters left</small>
          </label>
          <label className={styles.placeholder}>
            Target
            <span className={styles.currency}>$</span>
            <input
              type="number"
              name="target"
              value={form.target}
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

export default AddNewPot;
