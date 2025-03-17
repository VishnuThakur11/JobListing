import "./login.css"
import { useState } from "react";
import {useFormStatus} from "react-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      { pending? "Signing in..." : "Sign In"}
    </button>
  );
}

function Login() {
  const [isActive, setIsActive] = useState(false);


  const navigate = useNavigate();
const onSubmit = async (formData) => {
  const response = axios.post("http://localhost:3000/api/v1/user/login", formData, {withCredentials: true})
  if(response){
    navigate("/")
  }
}

  // const handleClick = (event) => {
  //   if (event.target.id === "register") {
  //     setIsActive(true);
      
  //   } else if (event.target.id === "login") {
  //     setIsActive(false);
      
  //   }
  // };

  return (
    <>

      <div className="login-body">
        <div className="container" id="container">

          <div className="form-container sign-in">

            <form action={onSubmit}>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password"/>
              <a href="#">Forget Your Password?</a>
             <Submit />
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="login">Sign In</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button className="hidden" id="register">Sign Up</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>


  )
}

export default Login


// function Login() {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login