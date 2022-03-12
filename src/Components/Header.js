import HomeButton from "./HomeButton"
import SignInButton from "./SignInButton"
import SignUpButton from "./SignUpButton"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className='header'>
        <HomeButton />
        <Navbar />
        {/* <SignInButton />
        <SignUpButton /> */}
    </header>
  )
}

export default Header