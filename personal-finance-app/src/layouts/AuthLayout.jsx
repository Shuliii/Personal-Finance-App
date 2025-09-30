import styles from "./AuthLayout.module.css";
import LoginSignupHeader from "../components/LoginSignupHeader";

const AuthLayout = ({children}) => {
  return (
    <div className={styles.page}>
      <LoginSignupHeader />
      <div className={styles.card}>{children}</div>
    </div>
  );
};

export default AuthLayout;
