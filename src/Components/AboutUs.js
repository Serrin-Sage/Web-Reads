// import { NavLink } from "react-router-dom"
import github from "../images/GitHub-logoDark.png"
import linkedin from "../images/linkedin-logo.png"

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="title-container">
        <h2 className="abtus-title">About Us</h2>
      </div>
        
        <div className="about-container">
          <div id="abt-serrin" className="abt-text">
            <h2 className="name-title">Serrin</h2>
            <p>TEXT TEXT TEXT</p>
            <div className="nav-container">
              <a href="https://github.com/" rel="noreferrer" target="_blank"><img src={github} alt="github logo" className="link-image"/></a>
              <a href="https://www.linkedin.com/feed/" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin logo" className="link-image"/></a>
            </div> 
          </div>
          <div id="abt-sadia" className="abt-text">
            <h2 className="name-title">Sadia</h2>
            <p>TEXT TEXT TEXT</p>
          </div>
          <div id="abt-chris" className="abt-text">
            <h2 className="name-title">Chris</h2>
            <p>TEXT TEXT TEXT</p>
          </div>
          <div id="abt-aida" className="abt-text">
            <h2 className="name-title">Aida</h2>
            <p>TEXT TEXT TEXT</p>
          </div>
        </div>
    </div>
  )
}

export default AboutUs