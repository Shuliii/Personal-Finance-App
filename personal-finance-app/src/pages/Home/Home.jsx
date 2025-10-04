import AppLayout from "../../layouts/AppLayout";
import {getFinanceData} from "../../data/data";

const Home = () => {
  const financeData = getFinanceData();

  const balance = financeData.balance;

  return (
    <AppLayout title="Overview">
      <div>this is Home page!</div>
    </AppLayout>
  );
};

export default Home;
