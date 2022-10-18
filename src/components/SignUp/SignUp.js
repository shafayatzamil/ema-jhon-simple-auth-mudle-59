import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import  { AuthContext } from "../../context/UserContext";
const SignUp = () => {
  const [error, setError] = useState(null);
  const {createUser}= useContext(AuthContext);
  console.log("user", createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email,password,confirm);

    if (password.length < 6) {
      setError("the password length is to short,atleast 6");
      return;
    }
    if (password !== confirm) {
      setError("password is not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign up!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Passoword</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input type="submit" className="btn-submit" value="Signup" />
      </form>
      <p>
        Already have an account ?<Link to="/login"> login</Link>
      </p>
      <p className="error-text">{error}</p>
    </div>
  );
};

export default SignUp;
