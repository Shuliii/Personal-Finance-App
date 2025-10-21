import AppLayout from "../../layouts/AppLayout";
import Budgets from "../../components/Budgets/Budgets";
import { getFinanceData } from "../../data/data";

const Budget = () => {
  const financeData = getFinanceData();
  const budgets = financeData.budgets;
  const transactions = financeData.transactions
  return (
    <AppLayout title="Budgets">
      <Budgets budgets={budgets} transactions={transactions}/>
    </AppLayout>
  );
};

export default Budget;
