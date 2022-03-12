import logo from "../images/logo.png"

const HomeButton = () => {
  return (
    <div className="home-container">
      <a href='/' className="homebtn">
      <img src={logo} />
      </a>
    </div>
    
  )
}

export default HomeButton