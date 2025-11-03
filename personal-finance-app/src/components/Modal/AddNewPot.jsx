import styles from "./AddNewPot.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addPots } from "../../store/potsSlice.js";
import { createPortal } from "react-dom";
import { allThemes } from "../../data/allThemes";

const description = (
  <p>
    Create a pot to set savings targets. These can help keep you on track as you
    save for special purchases.
  </p>
);

const AddNewPot = ({ onClick }) => {
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  console.log(form);
  return createPortal(
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
    </>,
    document.body
  );
};

export default AddNewPot;
