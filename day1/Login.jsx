
import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [role, setRole] = useState('user'); 

    

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Basic form validation
        const newErrors = {};

        // Validate username (email format)
        if (!username.trim()) {
            newErrors.username = 'Username is required';
        } else if (!/^\S+@\S+\.\S+$/.test(username)) {
            newErrors.username = 'Invalid email format';
        }

        // Validate password (minimum length of 8 characters)
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (Object.keys(newErrors).length === 0) {
            // Custom form submit functionality, e.g., AJAX request
            console.log('Form submitted:', { username, password});
        } else {
            // Update the errors state if there are validation errors
            setErrors(newErrors);
        }
    };

  

    return (
        <div className="containerr">
            <div className="left-section"></div>
            <div className="right-section">
                <div className="login-container">
                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <h2 className="login-title"><i className="fas fa-user-circle"></i> Login</h2>
                        <div className="form-control">
                            <i className="fas fa-user icon"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {errors.username && <p className="error-message">{errors.username}</p>}
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
                        
                        <div className="forgot-password-link">
                            
                            <a>Forget Password?</a>
                        </div>
                        <div className="form-con">
                            <i className="fas fa-user icon"></i>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        
                        <button className="sub"><Link to={'/home'}>Login</Link></button>
                        <button className='k'><Link to={'/sg'}>Signup</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

/*import { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [role, setRole] = useState('user');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Basic form validation
        const newErrors = {};

        // Validate username (email format)
        if (!username.trim()) {
            newErrors.username = 'Username is required';
        } else if (!/^\S+@\S+\.\S+$/.test(username)) {
            newErrors.username = 'Invalid email format';
        }

        // Validate password (minimum length of 8 characters)
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (Object.keys(newErrors).length === 0) {
            // Custom form submit functionality, e.g., AJAX request
            console.log('Form submitted:', { username, password });

            // Redirect to home page
            history.push('/home');
        } else {
            // Update the errors state if there are validation errors
            setErrors(newErrors);
        }
    };

    return (
        <div className="containerr">
            <div className="left-section"></div>
            <div className="right-section">
                <div className="login-container">
                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <h2 className="login-title"><i className="fas fa-user-circle"></i> Login</h2>
                        <div className="form-control">
                            <i className="fas fa-user icon"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {errors.username && <p className="error-message">{errors.username}</p>}
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

                        <div className="forgot-password-link">
                            <a>Forget Password?</a>
                        </div>
                        <div className="form-con">
                            <i className="fas fa-user icon"></i>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <button className="sub">
                            <Link to={'/home'}>Login</Link>
                        </button>
                        <button className='k'>
                            <Link to={'/sg'}>Signup</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
*/