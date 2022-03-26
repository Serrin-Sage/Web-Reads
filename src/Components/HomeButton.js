import logo from "../images/logo.png"
import { Link } from "react-router-dom"

const HomeButton = () => {
  return (
    <div className="home-container">
      <Link to='/' className="homebtn">
        <div className="img-container">
          <img src={logo} alt="WEB-READS"/>
        </div>
      </Link>
    </div>
    
  )
}

export default HomeButton