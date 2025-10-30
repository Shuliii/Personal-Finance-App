import styles from "./AppLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleSidebar } from "../store/sidebarSlice";
import { NavLink } from "react-router-dom";

import BigLogo from "../assets/images/logo-large.svg";
import SmallLogo from "../assets/images/logo-small.svg";
import Minimize from "../assets/images/icon-minimize-menu.svg";
import Home from "../assets/images/icon-nav-overview.svg?react";
import Transactions from "../assets/images/icon-nav-transactions.svg?react";
import Budget from "../assets/images/icon-nav-budgets.svg?react";
import Pots from "../assets/images/icon-nav-Pots.svg?react";
import RecurringBills from "../assets/images/icon-nav-recurring-bills.svg?react";

import Button from "../components/button/Button";
import AddNewPot from "../components/Modal/AddNewPot";
import AddNewBudget from "../components/Modal/AddNewBudget";

const AppLayout = ({ title, children, className }) => {
  const [showNewPot, setShowNewPot] = useState(false);
  const [showNewBudget, setShowNewBudget] = useState(false);
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.sidebar.collapsed);
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

        <div
          className={`${styles.container} ${styles.nav__container} ${
            collapsed && styles.containerCollapsed
          }`}
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Home />
            {!collapsed && <p className={styles.textHelper}>Overview</p>}
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Transactions />
            {!collapsed && <p className={styles.textHelper}>Transactions</p>}
          </NavLink>
          <NavLink
            to="/budget"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Budget />
            {!collapsed && <p className={styles.textHelper}>Budgets</p>}
          </NavLink>
          <NavLink
            to="/pots"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Pots />
            {!collapsed && <p className={styles.textHelper}>Pots</p>}
          </NavLink>
          <NavLink
            to="/recurringBills"
            className={({ isActive }) =>
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
            onClick={() => dispatch(toggleSidebar())}
          />
          {!collapsed && (
            <p onClick={() => dispatch(toggleSidebar())}>Minimize Menu</p>
          )}
        </div>
      </nav>
      <main className={styles.main}>
        <div
          className={`${styles.container} ${styles.main__container} ${
            className || ""
          }`}
        >
          <div className={styles.main__header}>
            <h1 className={styles.title}>{title}</h1>
            {title === "Budgets" && (
              <Button variant="primary" onClick={() => setShowNewBudget(true)}>
                + Add New Budget
              </Button>
            )}
            {title === "Pots" && (
              <Button variant="primary" onClick={() => setShowNewPot(true)}>
                + Add New Pot
              </Button>
            )}
          </div>
          {children}
        </div>
      </main>
      {showNewPot && <AddNewPot onClick={() => setShowNewPot(false)} />}
      {showNewBudget && (
        <AddNewBudget onClick={() => setShowNewBudget(false)} />
      )}
    </div>
  );
};

export default AppLayout;
