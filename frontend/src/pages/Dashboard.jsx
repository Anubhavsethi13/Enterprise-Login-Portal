import Layout from "../components/Layout";

import Navbar from "../components/Navbar";

import DashboardCard from "../components/DashboardCard";

import "../styles/dashboard.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",

    users: 20,
  },

  {
    month: "Feb",

    users: 35,
  },

  {
    month: "Mar",

    users: 50,
  },

  {
    month: "Apr",

    users: 40,
  },

  {
    month: "May",

    users: 70,
  },
];

const activities = [
  {
    id: 1,

    action: "New user created",

    time: "2 mins ago",
  },

  {
    id: 2,

    action: "Role updated",

    time: "10 mins ago",
  },

  {
    id: 3,

    action: "Operation deleted",

    time: "30 mins ago",
  },

  {
    id: 4,

    action: "Company admin added",

    time: "1 hour ago",
  },
];

const analyticsData = [
  {
    month: "Jan",

    users: 400,

    revenue: 2400,
  },

  {
    month: "Feb",

    users: 700,

    revenue: 3200,
  },

  {
    month: "Mar",

    users: 1100,

    revenue: 4800,
  },

  {
    month: "Apr",

    users: 1500,

    revenue: 6200,
  },

  {
    month: "May",

    users: 2100,

    revenue: 8100,
  },

  {
    month: "Jun",

    users: 2800,

    revenue: 10200,
  },
];

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <Navbar />

        <div className="dashboard-cards">
          <DashboardCard title="Total Users" value="150" />

          <DashboardCard title="Operations" value="45" />

          <DashboardCard title="Permissions" value="18" />

          <DashboardCard title="Revenue" value="$12K" />
        </div>

        <div className="chart-container">
          <h2>Users Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="users"
                stroke="#19b6ff"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="recent-activity">
          <h2>Activity Logs</h2>

          <div className="activity-list">
            {activities.map((activity) => (
              <div className="activity-item" key={activity.id}>
                <div>
                  <h4>{activity.action}</h4>
                </div>

                <span>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-section">
          <div className="chart-card">
            <h2>User Growth</h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData}>
                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <CartesianGrid strokeDasharray="3 3" />

                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#00c2ff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h2>Revenue Analytics</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData}>
                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <CartesianGrid strokeDasharray="3 3" />

                <Bar dataKey="revenue" fill="#00e676" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
