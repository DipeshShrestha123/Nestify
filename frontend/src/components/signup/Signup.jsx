import { useState } from 'react';
import axios from 'axios';
// import './SignUp.scss';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { setIsLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/signup", formData,  { withCredentials: true });    
      setSuccessMessage("Account created successfully!");
      setIsLoggedIn(true); 
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Something went wrong!');
      } else {
        setErrorMessage('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <input
          type="text"
          name="username"
          placeholder="Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          autoComplete='password'
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
        <div className="signup-footer">
          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
