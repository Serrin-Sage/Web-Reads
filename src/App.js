import Header from "./Components/Header";
import Intro from "./Components/Intro";
import AboutUs from "./Components/AboutUs";
import HowItWorks from "./Components/HowItWorks";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";
import Footer from "./Components/Footer";
import UserPage from "./Components/UserPage";
import ScrollToTop from "./Components/ScrollToTop";
import BookList from "./Components/BookList";
import Settings from "./Components/Settings";
import { useEffect, useState } from 'react'
import Survey from "./Components/Survey";
import MLpage from "./Components/MLpage";


function App() {
  
  const [colorTheme, setColorTheme] = useState('default-theme')

    useEffect(()=> {
        //check for selected theme in local storage
        const currentThemeColor = localStorage.getItem('theme-color');
        //if found set theme
        if (currentThemeColor) {
            setColorTheme(currentThemeColor);
        }
    }, [colorTheme]);

    
    //Updates selected Theme
    const updateTheme = (newColorTheme) => {
      setColorTheme(newColorTheme)
    }

  const url = "http://localhost:3000/userpage"
  onkeydown = (event) => {
    if(event.key === '~'){
      window.open(url)
    }
  }
  
  return (
    <Router>
      <ScrollToTop/>
      <div className={`App ${colorTheme}`}>
      <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Intro />
              <HowItWorks />
            </>
          } />
          <Route path='/mlpage' element={
            <MLpage />
          } />
          <Route path='/signup' element={
            <SignUpForm />
          } />
          <Route path='/signin' element={
            <SignInForm />
          } />
          <Route path='/userpage' element={
            <UserPage changeColor={updateTheme} />
          } />
          <Route path='/booklist' element={
            <BookList />
          } />
          <Route path='/survey' element={
            <Survey />
          } />
          <Route path='/settings' element={
            <Settings />
          } />
        </Routes>
      </div>
      <div className={`Footer ${colorTheme}`}>
        <Routes>
          <Route path='/contactus' element={<AboutUs />}/>
        </Routes>
        <Footer />
      </div>
      
        
    </Router>
    
  );
}

export default App;
