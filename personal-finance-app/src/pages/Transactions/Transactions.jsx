import AppLayout from "../../layouts/AppLayout";
import TransactionsCard from "../../components/Transactions/TransactionsCard";
import {getFinanceData} from "../../data/data";

const Transactions = () => {
  const financeData = getFinanceData();
  const transactions = financeData.transactions;
  return (
    <AppLayout title="Transactions">
      <TransactionsCard transactions={transactions} />
    </AppLayout>
  );
};

export default Transactions;
