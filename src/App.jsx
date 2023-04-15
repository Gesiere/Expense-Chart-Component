import { useState } from 'react'
import './scss/main.scss'
import './App.css'
import Top from './components/Top'
import Chart from './components/Chart'
import data from './data.json'

function App() {
  const [chartData, setChartData] = useState(data)

  return (
    <main>
      <div className="container">
        <Top />
        <Chart  chartData={chartData}/>
      </div>
    </main>
  )
}

export default App
