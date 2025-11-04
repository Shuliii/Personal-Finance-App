import styles from "./WithdrawMoneyPot.module.css";
import Backdrop from "./Backdrop";
import ModalLayout from "../../layouts/ModalLayout";

const description = (
  <p>
    Withdraw from your pot to put money back in your main balance. This will
    reduce the amount you have in this pot.
  </p>
);

const WithdrawMoneyPot = ({ onClick }) => {
  return (
    <>
      <Backdrop onClick={onClick} />
      <ModalLayout
        type="Withdraw"
        onClick={onClick}
        description={description}
      ></ModalLayout>
    </>
  );
};

export default WithdrawMoneyPot;
