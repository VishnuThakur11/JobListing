import Login from "./Login"
import axios from "axios";
import "./login.css"
const Register = () => {

    const onSubmit = async (formData) => {
        console.log(formData)
        const data = await axios.post("http://localhost:3000/api/v1/user/register", formData);
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
              <input type="radio" id="student" placeholder="Student" name="role" />
              </div>
              <div className="radio-recruiter">

              <label htmlFor="recruiter">Recruiter</label>
              <input type="radio" id="recruiter" placeholder="Recruiter" name="role" />
              </div>
              </div>
              <button >Sign Up</button>
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
      </div>


      {/* <Login /> */}

    </div>
  )
}

export default Register