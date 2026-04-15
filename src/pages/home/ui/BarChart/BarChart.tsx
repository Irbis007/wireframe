import { Bar, BarChart as EBarChart, XAxis } from "recharts";
const data = [
  {
    name: "Step 1",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Step 2",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Step 3",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Step 4",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Step 5",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Step 6",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Step 7",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Step 8",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Step 9",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Step 10",
    uv: 2390,
    pv: 3800,
  },
];
export const BarChart = () => {
  return (
    <EBarChart
      style={{
        width: "100%",
        aspectRatio: 2.5,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" tickLine={false} axisLine={false}/>
      <Bar
        dataKey="pv"
        fill="#e4e4e4ff"
      />
      <Bar
        dataKey="uv"
        fill="#8a8a8aff"
      />
    </EBarChart>
  );
};
