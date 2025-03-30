import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import { useLogin } from "../../api/authapi";
import { UserContext} from "../../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useContext(UserContext);
  const { login } = useLogin();
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = (values) => {
    const newErrors = {};
    
    if (!values.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!values.password) {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onLogin = async (event) => {
    event.preventDefault(); 
    
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    try {
      const authData = await login(values.email, values.password);
      if (authData.code === 403) {  
        setErrors({ email: "", password: "Login or password don't match" });
        return;  
      }
      userLoginHandler(authData);
      setTimeout(() => {
        navigate("/catalog");
      }, 1); 
      
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ email: "", password: "An error occurred. Please try again." });
    }
  };

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onLogin}> 
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" required />
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" name="password" required />
          {errors.password && <p  className="error">{errors.password}</p>}
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>If you don't have a profile, click <Link to="/register">here</Link></span>
          </p>
        </div>
      </form>
    </section>
  );
}
