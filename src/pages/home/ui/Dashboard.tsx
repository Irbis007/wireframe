import "./style.css";

import { PageCard } from "@features/pageCard/";
import { PyramidChart } from "./PyramidChart";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { PageMarkup } from "@shared/ui";

export const Dashboard = () => {
  return (
    <PageMarkup title="Dashboard">
      <div className="page_cards">
        <PageCard title="2,120" subtitle="Total Customers" percent={20} />
        <PageCard title="1,220" subtitle="Members" percent={15} />
        <PageCard
          title="316"
          subtitle="Active now"
          users={["User 1", "User 2", "User 3"]}
        />
      </div>
      <div className="dashboard_charts">
        <PyramidChart />
        <PieChart />
      </div>
      <div className="dashboard-main_chart">
        <div className="main_chart-top">
          <h2 className="main_chart-title">Revenue vs Leads</h2>
          <div className="main_chart-labels">
            <div className="main_chart-label">Revenue</div>
            <div className="main_chart-label">Leads</div>
          </div>
        </div>
        <div className="dashboard_chart-container">
          <div className="main_chart-revenue">
            <div className="main_chart-revenue_title">Revenue</div>
            <ul className="main_chart-revenue_list">
              <li>
                <span>$50,000</span>
                <span>50</span>
              </li>
              <li>
                <span>$40,000</span>
                <span>40</span>
              </li>
              <li>
                <span>$30,000</span>
                <span>30</span>
              </li>
              <li>
                <span>$20,000</span>
                <span>20</span>
              </li>
              <li>
                <span>$10,000</span>
                <span>10</span>
              </li>
              <li>
                <span>$0,000</span>
                <span>0</span>
              </li>
            </ul>
          </div>
          <BarChart />
        </div>
      </div>
    </PageMarkup>
  );
};
