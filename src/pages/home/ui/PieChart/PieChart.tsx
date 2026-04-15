import { Pie, PieChart as RPieChart, Tooltip } from "recharts";

const data = [
  { name: "Leads", value: 72, fill: "#eee" },
  { name: "Sales calls", value: 6, fill: "#cfcfcf" },
  { name: "Follow-up", value: 4, fill: "#c3c2c2" },
  { name: "Conversation", value: 18, fill: "#bbb" },
];
import './style.css'
export const PieChart = () => {
  const totalSummary = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <div className="dashboard_chart-block">
      <div className="dashboard_chart-title">Opportunity stage</div>
      <div className="dashboard_chart-main_content">
        <RPieChart
          style={{
            width: "80%",
            height: "80%",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="80%"
            label={{
              fill: "#000",
            }}
            labelLine={{
              stroke: "#000",
            }}
          >
            <Tooltip/>
          </Pie>
        </RPieChart>
        <ul className="dashboard_chart-legend_list">
          {data.map((item) => (
            <li className="dashboard_chart-legend" key={item.name}>
              <div className="legend_right">
                <div
                  className="dashboard_chart-legend-color"
                  style={{ backgroundColor: item.fill }}
                />
                <div className="dashboard_chart-legend-text">{item.name}</div>
              </div>
              <div className="legend_left">{item.value}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard_chart-summary">
        Total <span>{totalSummary}%</span>
      </div>
    </div>
  );
};
