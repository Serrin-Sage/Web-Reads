import logo from "../images/logo.png"

const HomeButton = () => {
  return (
    <div className="home-container">
      <a href='/' className="homebtn">
        <div className="img-container">
          <img src={logo} alt="WEB-READS"/>
        </div>
      </a>
    </div>
    
  )
}

export default HomeButton