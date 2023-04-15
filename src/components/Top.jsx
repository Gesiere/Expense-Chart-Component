import logo from '../assets/images/logo.svg'

const Top = () => {
  return (
    <div className="top">
        <div className="top-left">
            <p>My balance</p>  
            <h2>$921.48</h2>
        </div>
        <div className="top-right">
            <img src={logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Top