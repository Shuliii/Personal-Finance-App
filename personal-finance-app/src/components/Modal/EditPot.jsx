import styles from "./EditPot.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import { useSelector, useDispatch } from "react-redux";
import { allThemes } from "../../data/allThemes";

const description = (
  <p>If your saving targets change, feel free to update your pots.</p>
);

const EditPot = ({ onClick, category }) => {
  const dispatch = useDispatch();
  const pots = useSelector((state) => state.pots);
  const selectedPots = pots.find((b) => b.name === category);
  console.log(selectedPots);

  const usedThemes = pots.map((b) => b.theme.toLowerCase());
  return (
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Edit"
        nav="Pot"
        onClick={onClick}
        description={description}
      >
        <div className={styles.modal__form}>
          <label>
            Pot Name
            <input
              type="text"
              name="name"
              //   value={form.name}
              //   onChange={handleChange}
            ></input>
            <small>30 characters left</small>
          </label>
          <label className={styles.placeholder}>
            Target
            <span className={styles.currency}>$</span>
            <input
              type="number"
              name="target"
              //   value={form.target}
              //   onChange={handleChange}
            ></input>
          </label>
          <label>
            Theme
            <select
              name="theme"
              // value={form.theme}
              // onChange={handleChange}
            >
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

export default EditPot;
