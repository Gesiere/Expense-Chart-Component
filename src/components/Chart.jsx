

const Chart = ({chartData}) => {
  const d = new Date()
  const currentDay = d.getDay()

  




  return (
    <div className="chart-container">
      <div className="chart-heading">
        <h1>Spending - Last 7 days</h1>
      </div>

      <div className="chart-area">
        {chartData.map((data,index) => {
        ;
          const { day, amount,id } = data
          return (
          
            <div className="bar-chart" key={index}>
              <div className={currentDay === id ? 'bar active-day': 'bar'} style={{ height: `${amount * 3}px` }}>
                <span className="tooltip">${amount}</span>

              </div>
              <p>{day}</p>

            </div>
            
          )
        })}

      </div>

      <div className="horizontal-line"></div>

      <div className="chart-bottom">
        <div className="bottom-left">
          <p>Total this month</p>
          <h2>$478.33</h2>
        </div>
        <div className="bottom-right">
            <span>+2.4%</span>
            <p>from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Chart