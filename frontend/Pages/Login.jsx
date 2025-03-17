import "./login.css"
import { useState } from "react";

function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    if (event.target.id === "register") {
      setIsActive(true);
      
    } else if (event.target.id === "login") {
      setIsActive(false);
      
    }
  };

  return (
    <>

      <div className="login-body">
        <div className="container" id="container">

          <div className="form-container sign-in">

            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Your Password?</a>
              <button onClick={handleClick}>Sign In</button>
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