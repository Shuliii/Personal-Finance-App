import styles from "./LoginHeader.module.css";
import Logo from "../../assets/images/logo-large.svg";

const LoginHeader = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
    </header>
  );
};

export default LoginHeader;
