import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <LoginHeader />
      <div className={styles.card}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
