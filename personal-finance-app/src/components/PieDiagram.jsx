import styles from './PieDiagram.module.css'
import { PieChart, Pie, Cell } from "recharts";

const PieDiagram = ({budgets, className}) => {
    return <div className={`${styles.pie__chart} ${className || ""}`}>
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
}

export default PieDiagram;