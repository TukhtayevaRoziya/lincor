import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import styles from './Chart.module.css'
import useWindowSize from '../../../utility/hooks.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ...registerables,
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      maxWidth: 100,
      padding: {
        bottom: 100,
      },
      labels: {
        boxWidth: 3,
        boxHeight: 3,
        borderWidth: 2,
        background: '#FFFFFF',
        pointStyle: 'circle',
      },
    },
  },
  borderJoinStyle: 'bevel',
}

export function ChartBox() {
  const chartData={
    data1: [20, 40, 60, 70, 20, 30, 80, 68, 14],
    data2: [40, 20, 70, 30, 80, 40, 70, 28, 44],
  }
  const { width } = useWindowSize()

  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  var today = new Date()
  var last5Months = []

  var num
  if (width < 692) {
    num = 3
  } else {
    num = 8
  }
  for (var i = 0; i < num; i++) {
    let dis = today.getMonth() - i
    last5Months.push(
      monthNames[
        dis === -1
          ? 11
          : dis === -2
          ? 10
          : dis === -3
          ? 9
          : dis === -4
          ? 8
          : dis === -5
          ? 7
          : dis
      ],
    )
  }

  const getLastMonths = last5Months.reverse()
  const data = {
    labels: getLastMonths,
    datasets: [
      {
        label: 'Jami o’quvchilar',
        data: chartData.data2,
        borderColor: '#2F49D1',
        backgroundColor: '#fff',
        color: 'red',
        yAxisID: 'y',
        borderWidth: 6,
        borderRadius: 70,
        circular: true,
      },
      {
        label: 'Tark etganlar',
        data: chartData.data1,
        borderColor: '#E13468',
        backgroundColor: '#fff',
        color: 'red',
        borderRadius: 70,
        yAxisID: 'y',
        borderWidth: 6,
        circular: true,
      },
    ],
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>2022-YIL statistika</h1>
      <Line style={{ width: '100%' }} options={options} data={data} />
    </div>
  )
}
