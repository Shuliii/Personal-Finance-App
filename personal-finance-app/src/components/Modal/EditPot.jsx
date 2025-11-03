import styles from "./EditPot.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";
import {useSelector, useDispatch} from "react-redux";
import {allThemes} from "../../data/allThemes";
import {useState} from "react";

const description = (
  <p>If your saving targets change, feel free to update your pots.</p>
);

const EditPot = ({onClick, category}) => {
  const dispatch = useDispatch();
  const pots = useSelector((state) => state.pots);
  const selectedPot = pots.find((b) => b.name === category);

  const [pot, setPot] = useState({
    name: selectedPot.name,
    target: selectedPot.target,
    total: selectedPot.total,
    theme: selectedPot.theme.toLowerCase(),
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPot((prev) => ({...prev, [name]: value}));
  };

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
              value={pot.name}
              onChange={handleChange}
              disabled
            ></input>
            <small>30 characters left</small>
          </label>
          <label className={styles.placeholder}>
            Target
            <span className={styles.currency}>$</span>
            <input
              type="number"
              name="target"
              value={pot.target}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Theme
            <select name="theme" value={pot.theme} onChange={handleChange}>
              {allThemes.map((theme) => (
                <option
                  key={theme.name}
                  value={theme.color}
                  disabled={
                    usedThemes.includes(theme.color.toLowerCase()) &&
                    theme.color !== selectedPot.theme
                  }
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
