import { useState } from "react";
import Validation from "./Validation";

function SignInForm() {

    const [values, setValues] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
    }
    
    return (
        <div className="formcontainer">
            <div className="app-wrapper">
                <div>
                    <h2>Sign In</h2>
                </div>
                <form className="form-wrapper">
                    <div className="form-field">
                        <label>Email</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="text" 
                            name="email" 
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="password" 
                            name="password" 
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign In</button>
                    </div>
                </form>
                <p>Don't have an account? Sign up <a href='/signup' >
                here!</a>
                </p>
            </div>
            
        </div>
    )
}

export default SignInForm