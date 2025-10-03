import styles from "./AuthLayout.module.css";
import LoginSignupHeader from "../components/LoginSignupHeader";
import Logo from "../assets/images/logo-large.svg";

const AuthLayout = ({children}) => {
  return (
    <div className={styles.page}>
      <LoginSignupHeader />
      <div className={styles.headerLeft}>
        <div className={styles.headerLeftContent}>
          <img src={Logo} alt="Logo" />
          <div className={styles.text}>
            <h1>Keep track of your money and save for your future</h1>
            <p>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card}>{children}</div>
    </div>
  );
};

export default AuthLayout;
