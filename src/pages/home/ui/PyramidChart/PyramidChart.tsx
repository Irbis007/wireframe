import { FunnelChart, Funnel, Tooltip, LabelList } from "recharts";
import './style.css'
const data = [
  { value: 100, name: "Leads", fill: "#e7e7e7ff" },
  { value: 80, name: "Sales calls", fill: "#c6c6c6ff" },
  { value: 60, name: "Follow up", fill: "#999999ff" },
  { value: 40, name: "Conversion", fill: "#808080ff" },
  { value: 20, name: "Sale", fill: "#686868ff" },
];

;

export const PyramidChart = () => {
  const totalSummary = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <div className="dashboard_chart-block">
      <h2 className="dashboard_chart-title">Deal funnel</h2>
      <div className="dashboard_chart-main_content">
        <div className="pyramid_chart">
          <FunnelChart
            style={{
              width: "100%",
              height: "100%",
              aspectRatio: 1.618,
            }}
            responsive
            margin={{
              right: 30,
            }}
          >
            <Tooltip />
            <Funnel dataKey="value" data={data}>
              <LabelList
                position="right"
                fill="#000"
                stroke="none"
                dataKey={(obj) => obj.value}
              />
            </Funnel>
          </FunnelChart>
        </div>
        <ul className="pyramid_chart-legend_list">
          {data.map((item) => (
            <li className="pyramid_chart-legend" key={item.name}>
              <div className="legend_right">
                <div
                  className="pyramid_chart-legend-color"
                  style={{ backgroundColor: item.fill }}
                />
                <div className="pyramid_chart-legend-text">{item.name}</div>
              </div>
              <div className="legend_left">{item.value}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard_chart-summary">
        Total <span>{totalSummary}</span>
      </div>
    </div>
  );
};
