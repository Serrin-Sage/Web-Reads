const Navbar = () => {
    return (
        <div className="button-container">
           <div className="sign-btn">
                <a href="/signin" className="signinbtn">
                    Sign in</a>
           </div>
           <div className="sign-btn">
                <a href="/signup" className="signupbtn">
                    Sign Up</a>
           </div>
        </div>
    )
}

export default Navbar