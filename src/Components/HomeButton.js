import logo from '../images/webreads_large.png'
import { Link } from "react-router-dom"
// import { ReactComponent as SVG} from '../images/web-reads-clean_boardered.svg'
const HomeButton = () => {
  return (
    <div className="home-container">
      <Link to='/' className="homebtn">
        <div className="img-container">
          <img src={logo} alt="WEB-READS" className="logo-img"/>
        </div>
      </Link>
    </div>
    
  )
}

export default HomeButton