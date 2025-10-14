import styles from "./Budgets.module.css";
import ArrowRight from "../../assets/images/icon-caret-right.svg";
import { PieChart, Pie, Cell } from "recharts";

const Budgets = ({ budgets }) => {
  const helper = budgets.map((budget) => (
    <div className={styles.addition__card} key={budget.category}>
      <div
        className={styles.colorBar}
        style={{ backgroundColor: budget.theme }}
      ></div>

      <div className={styles.addition__text}>
        <p>{budget.category}</p>
        <p>$ {budget.maximum}</p>
      </div>
    </div>
  ));
  return (
    <div className={styles.budgets__card}>
      <div className={styles.text_wrapper}>
        <h1>Budgets</h1>
        <div className={styles.seeDetails}>
          <p>See Details</p>
          <img src={ArrowRight} alt="arrow right icon" />
        </div>
      </div>
      <div className={styles.budgets__content}>
        <div className={styles.pie__chart}>
          <PieChart width={240} height={240}>
            {/* Inner background ring */}
            <Pie
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              data={budgets}
              dataKey="maximum"
              cx="50%"
              cy="50%"
              outerRadius={97.5}
              innerRadius={85}
              stroke="none"
            >
              {budgets.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.theme} opacity={0.25} />
              ))}
            </Pie>

            {/* Main colored donut */}
            <Pie
              data={budgets}
              dataKey="maximum"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={97.5}
            >
              {budgets.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.theme} />
              ))}
            </Pie>

            {/* Center text */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="28"
              fontWeight="700"
              fill="#262626"
            >
              $338
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="#7E7E7E"
            >
              of $975 limit
            </text>
          </PieChart>
        </div>
        <div className={styles.budgets__additions}>{helper}</div>
      </div>
    </div>
  );
};

export default Budgets;
