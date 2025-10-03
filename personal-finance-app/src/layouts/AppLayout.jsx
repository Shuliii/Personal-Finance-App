import styles from "./AppLayout.module.css";
import Home from "../assets/images/icon-nav-overview.svg";
import {Link} from "react-router-dom";

const AppLayout = ({title, children}) => {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={`${styles.container} ${styles.nav__container}`}>
          <Link to="/home">
            <img src={Home} alt="home icon" />
          </Link>
          <Link to="/home">
            <img src={Home} alt="home icon" />
          </Link>
          <Link to="/home">
            <img src={Home} alt="home icon" />
          </Link>
          <Link to="/home">
            <img src={Home} alt="home icon" />
          </Link>
          <Link to="/home">
            <img src={Home} alt="home icon" />
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={`${styles.container} ${styles.main__container}`}>
          <h1>{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
