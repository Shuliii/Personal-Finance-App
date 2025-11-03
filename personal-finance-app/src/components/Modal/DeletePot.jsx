import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import DeleteModalLayout from "../../layouts/deleteModalLayout";

const description = (
  <p>
    Are you sure you want to delete this pot? This action cannot be reversed,
    and all the data inside it will be removed forever.
  </p>
);

const deletePot = ({ onClick, name }) => {
  return createPortal(
    <>
      <Backdrop onClick={onClick} />
      <DeleteModalLayout
        onClick={onClick}
        description={description}
        name={name}
      />
    </>,
    document.body
  );
};

export default deletePot;
