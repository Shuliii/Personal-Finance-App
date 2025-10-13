import AppLayout from "../../layouts/AppLayout";
import {getFinanceData} from "../../data/data";
import Balance from "../../components/Home/Balance";
import Pots from "../../components/Home/Pots";
import Transactions from "../../components/Home/Transactions";
import Budgets from "../../components/Home/Budgets";
import styles from "./Home.module.css";

const Home = () => {
  const financeData = getFinanceData();

  const balance = financeData.balance;
  const pots = financeData.pots;
  const transactions = financeData.transactions;
  const budgets = financeData.budgets;
  return (
    <AppLayout title="Overview" className={styles.page}>
      <Balance balance={balance} />
      <Pots pots={pots} />
      <Transactions transactions={transactions} />
      <Budgets budgets={budgets} />
    </AppLayout>
  );
};

export default Home;
