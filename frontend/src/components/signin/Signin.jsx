import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import { signIn } from '../utils/api';
import "./Signin.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      await signIn({ email, password });
      console.log(email,password);
      setIsLoggedIn(true); 
      navigate("/");

    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid credentials!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        {errorMessage && <p className="signin-error">{errorMessage}</p>}

        <div className="signin-inputGroup">
          <label htmlFor="email" className="signin-label">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="signin-input" required />
        </div>
        <div className="signin-inputGroup">
          <label htmlFor="password" className="signin-label">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="signin-input" required />
        </div>
        <button type="submit" className="signin-button" disabled={isLoading}>{isLoading ? "Signing In..." : "Sign In"}</button>
        <div className="signin-footer">
          <p>Need an account? <a href="/signup">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
