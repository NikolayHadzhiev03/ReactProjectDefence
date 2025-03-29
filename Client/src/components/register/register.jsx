import { Link } from "react-router";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { useRegister } from "../../api/authapi";


export default function Register(){
  const navigate = useNavigate();
const {register} = useRegister();
const { userLoginHandler } = useUserContext();

    const onRegister = async(formData) => {
      const {email ,password } = Object.fromEntries(formData);
      

      const repass = formData.get("confirm-password");
      if(password !== repass){
        alert('Password Missmatch!');
        return;
      }

      const authData = await register(email,password);
      userLoginHandler(authData);
      navigate('/');
    }

    



    return (
        <section id="register-page" className="content auth">
  <form id="register" action={onRegister}>
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
      <label htmlFor="pass">Password:</label>
      <input type="password" name="password" id="register-password" />
      <label htmlFor="con-pass">Confirm Password:</label>
      <input type="password" name="confirm-password" id="confirm-password" />
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