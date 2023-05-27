import React from 'react'
import "./Dashboard.css"
import DashboardTile from '../DashboardTile/DashboardTile'

const Dashboard = () => {
  return (
    <div className = "dashboardbox">
        <h3>Welcome To Slack</h3>
        <DashboardTile/>
    </div>
  )
}

export default Dashboard