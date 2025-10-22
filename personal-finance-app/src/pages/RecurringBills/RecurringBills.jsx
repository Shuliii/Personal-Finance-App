import AppLayout from "../../layouts/AppLayout";
import RecurringBillsComponent from "../../components/RecurringBills/RecurringBillsComponent";

import { getFinanceData } from "../../data/data";

const RecurringBills = () => {
  const financeData = getFinanceData();
  const recurringbills = financeData.transactions.filter((data) => data.recurring === true)
  return (
    <AppLayout title="Recurring Bills">
      <RecurringBillsComponent RecurringBills={recurringbills}/>
    </AppLayout>
  );
};

export default RecurringBills;
