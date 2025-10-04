import styles from "./AppLayout.module.css";
import {useState} from "react";
import BigLogo from "../assets/images/logo-large.svg";
import SmallLogo from "../assets/images/logo-small.svg";
import Minimize from "../assets/images/icon-minimize-menu.svg";
import Home from "../assets/images/icon-nav-overview.svg?react";
import Transactions from "../assets/images/icon-nav-transactions.svg?react";
import Budget from "../assets/images/icon-nav-budgets.svg?react";
import Pots from "../assets/images/icon-nav-Pots.svg?react";
import RecurringBills from "../assets/images/icon-nav-recurring-bills.svg?react";

import {NavLink} from "react-router-dom";

const AppLayout = ({title, children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const minHandler = () => {
    setCollapsed(true);
  };
  const maxHandler = () => {
    setCollapsed(false);
  };
  return (
    <div
      className={`${styles.page} ${
        collapsed ? styles.collapsed : styles.expanded
      }`}
    >
      <nav className={styles.nav}>
        <div className={styles.logo__wrapper}>
          {!collapsed ? (
            <img src={BigLogo} alt="big logo" />
          ) : (
            <img src={SmallLogo} alt="small logo" />
          )}
        </div>

        <div className={`${styles.container} ${styles.nav__container}`}>
          <NavLink
            to="/home"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Home />
            {!collapsed && <p className={styles.textHelper}>Overview</p>}
          </NavLink>
          <NavLink
            to="/transactions"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Transactions />
            {!collapsed && <p className={styles.textHelper}>Transactions</p>}
          </NavLink>
          <NavLink
            to="/budget"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Budget />
            {!collapsed && <p className={styles.textHelper}>Budgets</p>}
          </NavLink>
          <NavLink
            to="/pots"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Pots />
            {!collapsed && <p className={styles.textHelper}>Pots</p>}
          </NavLink>
          <NavLink
            to="/recurringBills"
            className={({isActive}) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <RecurringBills />
            {!collapsed && <p className={styles.textHelper}>Recurring bills</p>}
          </NavLink>
        </div>
        <div className={styles.size__wrapper}>
          <img
            src={Minimize}
            alt="toggle menu"
            className={`${styles.arrow} ${collapsed ? styles.rotated : ""}`}
            onClick={collapsed ? maxHandler : minHandler}
          />
          {!collapsed && <p onClick={minHandler}>Minimize Menu</p>}
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
