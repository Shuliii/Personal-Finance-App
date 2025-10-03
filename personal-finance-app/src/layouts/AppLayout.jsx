import styles from "./AppLayout.module.css";
// import {ReactComponent as Home} from "../assets/images/icon-nav-overview.svg?react";
// import {ReactComponent as Transactions} from "../assets/images/icon-nav-transactions.svg?react";
// import {ReactComponent as Budget} from "../assets/images/icon-nav-budgets.svg?react";
// import {ReactComponent as Pots} from "../assets/images/icon-nav-Pots.svg?react";
// import {ReactComponent as RecurringBills} from "../assets/images/icon-nav-recurring-bills.svg?react";
import Home from "../assets/images/icon-nav-overview.svg?react";
import Transactions from "../assets/images/icon-nav-transactions.svg?react";
import Budget from "../assets/images/icon-nav-budgets.svg?react";
import Pots from "../assets/images/icon-nav-Pots.svg?react";
import RecurringBills from "../assets/images/icon-nav-recurring-bills.svg?react";

import {NavLink} from "react-router-dom";

const AppLayout = ({title, children}) => {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={`${styles.container} ${styles.nav__container}`}>
          <NavLink
            to="/home"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Home />
          </NavLink>
          <NavLink
            to="/transactions"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Transactions />
          </NavLink>
          <NavLink
            to="/budget"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Budget />
          </NavLink>
          <NavLink
            to="/pots"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Pots />
          </NavLink>
          <NavLink
            to="/recurringBills"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <RecurringBills />
          </NavLink>
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
