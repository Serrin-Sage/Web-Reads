import { useState } from "react";
import Validation from "./Validation";

function SignUpForm() {

    const [values, setValues] = useState({
        fullname:"",
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
                    <h2>Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="form-field">
                        <label>Full Name</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="text" 
                            name="fullname" 
                            value={values.fullname} 
                            onChange={handleChange} 
                        />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
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
                    <div className="form-field">
                        <label>Re-enter Password</label>
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
                        <button className="submit" onClick={handleFormSubmit}>Sign up</button>
                    </div>
                </form>
                <div>
                <p>Already have an account? Sign in <a href='/signin' >
                here!</a>
                </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm