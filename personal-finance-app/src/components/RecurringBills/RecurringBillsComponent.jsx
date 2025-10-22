import styles from './RecurringBillsComponent.module.css'
import RecurringBillsSummary from './RecurringBillsSummary';

const RecurringBillsComponent = ({RecurringBills, transactions}) => {
    return <div className={styles.RecurringBills}>
        <RecurringBillsSummary RecurringBills={RecurringBills}/>
        </div>
}

export default RecurringBillsComponent;