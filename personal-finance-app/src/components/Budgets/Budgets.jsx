import styles from './Budgets.module.css'
import BudgetsDetails from './BudgetsDetails';
import BudgetSummary from './BudgetsSummary';

const Budgets = ({budgets, transactions}) => {
    
    return <div className={styles.budgets}>
        <BudgetSummary budgets={budgets}/>
        <BudgetsDetails budgets={budgets} transactions={transactions}/>
        </div>
}

export default Budgets;