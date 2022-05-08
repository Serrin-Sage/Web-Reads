import sign_up_gif from "../images/sign-up-click.gif"
import theme_change from "../images/theme-change.gif"

const HowItWorks = () => {
  return (
    <div className="howitworks">
        <div className="wrapper">
          <h2 className="HIW-title">How It Works</h2>
          <div className="howitworksparagraph">
              <h2 className="step-titles">
                Step 1: Sign Up! 
                <p className="step-description">Create a user name, fill in your email and make a Password!</p>
              </h2>
              <img src={sign_up_gif} alt="test gif" className="sign-up-gif"/>
              <h2 className="step-titles">
                Step 2: Fill out our survey 
                <p className="step-description">
                  This helps us find what books to suggest.
                  Our Algorithm takes the input from the survey and scans through our book database.
                  When it finds a good match a list of suggestions will be shown.</p>
              </h2>
              <h2 className="step-titles">
                Step 3: Look through the book list 
                <p className="step-description">You can add any book to your favoited list!</p>
              </h2>
              <h2 className="step-titles">
                Step 4: Customize your Profile! 
                <p className="step-description">You can change the Theme and your Profile Icon!</p>
              </h2>
              <img src={theme_change} alt="test gif" className="sign-up-gif"/>
          </div>
        </div>
    </div>
  )
}

export default HowItWorks