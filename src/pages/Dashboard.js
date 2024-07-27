import React from 'react'
import Table from '../components/Table'
import Charts from '../components/Charts'
import Calendar from '../components/Calendar'
import KanbanBoard from '../components/KanbanBoard'

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Charts />
    <Table />
    <Calendar />
    <KanbanBoard />
  </div>
)

export default Dashboard
