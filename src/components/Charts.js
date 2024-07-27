import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Registering chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Chart data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.1,
      pointBorderColor: '#fff',
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(75,192,192,1)',
      pointHoverBackgroundColor: '#fff',
    },
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: '#742774',
      tension: 0.1,
      pointBorderColor: '#fff',
      pointBackgroundColor: '#742774',
      pointHoverBorderColor: '#742774',
      pointHoverBackgroundColor: '#fff',
    },
  ],
}

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 14,
          family: 'Arial, sans-serif',
        },
        color: '#333',
      },
    },
    title: {
      display: true,
      text: 'Line Chart Example',
      font: {
        size: 18,
        family: 'Arial, sans-serif',
      },
      color: '#333',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: '#e0e0e0',
      },
      ticks: {
        color: '#333',
        font: {
          size: 12,
          family: 'Arial, sans-serif',
        },
      },
    },
    y: {
      grid: {
        color: '#e0e0e0',
      },
      ticks: {
        color: '#333',
        font: {
          size: 12,
          family: 'Arial, sans-serif',
        },
      },
    },
  },
}

// Charts Component
const Charts = () => (
  <div style={{ width: '80%', margin: '0 auto' }}>
    <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Charts</h3>
    <h4 style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
      A detailed view of datasets over the months
    </h4>
    <Line data={data} options={options} />
  </div>
)

export default Charts
