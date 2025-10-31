import AppLayout from "../../layouts/AppLayout";
import Budgets from "../../components/Budgets/Budgets";
import {useSelector} from "react-redux";
import {getFinanceData} from "../../data/data";

const Budget = () => {
  const financeData = getFinanceData();
  const budgets = useSelector((state) => state.budgets);
  const transactions = financeData.transactions;
  return (
    <AppLayout title="Budgets">
      <Budgets budgets={budgets} transactions={transactions} />
    </AppLayout>
  );
};

export default Budget;
