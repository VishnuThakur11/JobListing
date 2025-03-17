import Login from "./Login"
import axios from "axios";
import "./login.css"
import {useFormStatus} from "react-dom"

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      { pending? "Signing in..." : "Sign In"}
    </button>
  );
}
const Register = () => {
    const onSubmit = async (formData) => {
        const data = await axios.post("http://localhost:3000/api/v1/user/register", formData);
        console.log(data);
    }


  return (
    <div>
      <div className="login-body">
        <div className="container" id="container">

          <div className="form-container signup">
            <form action={onSubmit}>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registeration</span>
              <input type="text" placeholder="Name" name="fullname" />
              <input type="email" placeholder="Email" name= "email"/>
              <input type="number" placeholder="Number" name="phoneNumber" />
              <input type="password" placeholder="Password" name="password" />
              <input type="file" placeholder="image" name="img" />
              <div className="radio-buttons">

              <div className="radio-student">

              <label htmlFor="student">Student</label>
              <input type="radio" id="student" placeholder="Student" value="student" name="role" />
              </div>
              <div className="radio-recruiter">

              <label htmlFor="recruiter">Recruiter</label>
              <input type="radio" id="recruiter" placeholder="Recruiter" value="recruiter" name="role" />
              </div>
              </div>
              <Submit />
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                
                <button className="hidden" id="login">Sign In</button>
              </div>

              <div className="toggle-panel toggle-right">
              Already a user?
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" type="submit" id="register">Sign In</button>
            </div>
          </div>
        </div>
      </div>


      {/* <Login /> */}

    </div>
    </div>
  )
}

export default Register