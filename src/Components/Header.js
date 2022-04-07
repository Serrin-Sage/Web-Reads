import HomeButton from "./HomeButton"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"


const Header = () => {
  const [colorTheme, setColorTheme] = useState('default-theme')

    useEffect(()=> {
        //check for selected theme in local storage
        const currentThemeColor = localStorage.getItem('theme-color');
        //if found set theme
        if (currentThemeColor) {
            setColorTheme(currentThemeColor);
        }
    }, []);

    const handleClick = (theme) => {
      setColorTheme(theme);
      localStorage.setItem('theme-color', theme)
  }
  return (
    <header className={`header ${colorTheme}`}>
        <HomeButton />
        <Navbar />
    </header>
  )
}

export default Header