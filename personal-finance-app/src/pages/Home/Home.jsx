import AppLayout from "../../layouts/AppLayout";
import { getFinanceData } from "../../data/data";
import Balance from "../../components/Home/Balance";
import Pots from "../../components/Home/Pots";
import Transactions from "../../components/Home/Transactions";
import Budgets from "../../components/Home/Budgets";
import RecurringBills from "../../components/Home/RecurringBills";
import styles from "./Home.module.css";

const Home = () => {
  const financeData = getFinanceData();

  const balance = financeData.balance;
  const pots = financeData.pots;
  const transactions = financeData.transactions;
  const budgets = financeData.budgets;
  const recurring = financeData.transactions.filter(
    (transaction) => transaction.recurring == true
  );
  return (
    <AppLayout title="Overview" className={styles.page}>
      <Balance balance={balance} />
      <Pots pots={pots} />
      <Transactions transactions={transactions} />
      <Budgets budgets={budgets} />
      <RecurringBills recurring={recurring} />
    </AppLayout>
  );
};

export default Home;
