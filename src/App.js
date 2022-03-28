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


function App() {
  onkeydown = (event) => {
    if(event.key === '~'){
      window.open("http://localhost:3000/userpage")
    }
  }
  
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Intro />
              <HowItWorks />
            </>
          } />
          <Route path='/signup' element={
            <SignUpForm />
          } />
          <Route path='/signin' element={
            <SignInForm />
          } />
          <Route path='/userpage' element={
            <UserPage />
          } />
        </Routes>
      </div>
      <div className="Footer">
        <Routes>
          <Route path='/contactus' element={<AboutUs />}/>
        </Routes>
        <Footer />
      </div>
      
        
    </Router>
    
  );
}

export default App;
