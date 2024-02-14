

import  { useState } from 'react';
 // Make sure to create a Signup.css file for styling
import './signup.css';
import { Link } from 'react-router-dom';
const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const [role, setRole] = useState('user'); 
    const [errors, setErrors] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Basic form validation
        const newErrors = {};

        // Validate first name
        if (!firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        // Validate last name
        if (!lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        // Validate email (email format)
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        // Validate password (minimum length of 8 characters)
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (Object.keys(newErrors).length === 0) {
            // Custom form submit functionality, e.g., AJAX request
            console.log('Form submitted:', { firstName, lastName, email, password });
        } else {
            // Update the errors state if there are validation errors
            setErrors(newErrors);
        }
    };

    return (
        <div className="containerk">
            <div className="left-section"></div>
            <div className="right-section">
                <div className="signup-container">
                    <form className="signup-form" onSubmit={handleFormSubmit}>
                        <h2 className="signup-title"><i className="fas fa-user-plus"></i>User Signup</h2>
                        <div className="form-control">
                            <i className="fas fa-user icon"></i>
                            <input
                                type="text"
                                placeholder="First Name"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                        </div>
                        <div className="form-control">
                            <i className="fas fa-user icon"></i>
                            <input
                                type="text"
                                placeholder="Last Name"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                        </div>
                        <div className="form-control">
                            <i className="fas fa-envelope icon"></i>
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="form-control">
                            <i className="fas fa-lock icon"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>
                         <div className="form-con">
                            <i className="fas fa-user icon"></i>
                            {/* <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select> */}
                        </div>
                        <button className='signb'><Link to={'/home'}>Signup</Link></button>
                      
                        <button className='lg'><Link to={'/lg'}>Login</Link></button>
                        <p><Link to={'/asign'}>sigun up as admin</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
