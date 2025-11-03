import AppLayout from "../../layouts/AppLayout";
import Potscard from "../../components/Pots/Potscard";
import { useSelector } from "react-redux";
import styles from "./Pots.module.css";
import { useState } from "react";

const Pots = () => {
  const pots = useSelector((state) => state.pots);
  const [openCard, setOpenCard] = useState(null);

  const helper = pots.map((pot) => (
    <Potscard
      key={pot.name}
      pot={pot}
      open={openCard === pot.name}
      onToggle={() =>
        setOpenCard((prev) => (prev === pot.name ? null : pot.name))
      }
    />
  ));
  return (
    <AppLayout title="Pots">
      <div className={styles.pots__container}>{helper}</div>
    </AppLayout>
  );
};

export default Pots;
