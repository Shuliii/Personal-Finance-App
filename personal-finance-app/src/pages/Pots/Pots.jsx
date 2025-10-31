import AppLayout from "../../layouts/AppLayout";
import Potscard from "../../components/Pots/Potscard";
import {useSelector} from "react-redux";
import styles from "./Pots.module.css";

const Pots = () => {
  const pots = useSelector((state) => state.pots);
  const helper = pots.map((pot, index) => <Potscard pot={pot} key={index} />);
  return (
    <AppLayout title="Pots">
      <div className={styles.pots__container}>{helper}</div>
    </AppLayout>
  );
};

export default Pots;
