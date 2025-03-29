import { Link } from "react-router";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { useRegister } from "../../api/authapi";
import { useState } from "react";


export default function Register(){
  const navigate = useNavigate();
const {register} = useRegister();
const { userLoginHandler } = useUserContext();
const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

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

  if (!values["confirm-password"]) {
    newErrors.confirmPassword = "Confirm Password is required.";
  } else if (values.password !== values["confirm-password"]) {
    newErrors.confirmPassword = "Passwords do not match.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
const onRegister = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData.entries());

  if (!validateForm(values)) {
    return;
  }

  try {
    const authData = await register(values.email, values.password);
    userLoginHandler(authData);
    navigate("/");
  } catch (error) {
    console.error("Registration error:", error);
    setErrors({ email: "", password: "An error occurred. Please try again." });
  }
};
    return (
        <section id="register-page" className="content auth">
  <form id="register" onSubmit={onRegister}>
    <div className="container">
      <div className="brand-logo" />
      <h1>Register</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="maria@email.com"
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <label htmlFor="pass">Password:</label>
      <input type="password" name="password" id="register-password" />
      {errors.password && <p className="error">{errors.password}</p>}
      <label htmlFor="con-pass">Confirm Password:</label>
      <input type="password" name="confirm-password" id="confirm-password" />
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <input className="btn submit" type="submit" defaultValue="Register" />
      <p className="field">
        <span>
          If you already have profile click <Link to="/login">here</Link>
        </span>
      </p>
    </div>
  </form>
</section>

    );
};