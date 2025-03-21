import { useContext } from "react";
import { Link, useNavigate } from "react-router"; 
import { useLogin } from "../../api/authapi";
import { UserContext} from "../../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useContext(UserContext);
  const { login } = useLogin();

  const onLogin = async (event) => {
    event.preventDefault(); 
    
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    try {
      const authData = await login(values.email, values.password);
      if (authData.code === 403) {  
        alert("Login or password don't match");
        return;  
      }
      userLoginHandler(authData);
      navigate("/"); 
      
    } catch (error){
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
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

          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" name="password" required />
          
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>If you don't have a profile, click <Link to="/register">here</Link></span>
          </p>
        </div>
      </form>
    </section>
  );
}
