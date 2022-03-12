import Header from "./Components/Header";
import Intro from "./Components/Intro";
import AboutUs from "./Components/AboutUs";
import HowItWorks from "./Components/HowItWorks";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Intro />
              <HowItWorks />
              <AboutUs />
              
            </>
          } />
          <Route path='/signup' element={
            <SignUpForm />
          } />
          <Route path='/signin' element={
            <SignInForm />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
