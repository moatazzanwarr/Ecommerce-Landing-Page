// Imports
import React from "react";
import './signIn.css'

// Icons
import icons from "../../assets/icons";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="signIn">
      <form action="">
        <h3>Sign in</h3>
        <div>
          <input type="text" id="email" placeholder="Your email" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
        <p>or sign up with</p>
        <div className="signBy">
          <div className="google">
            <icons.GoogleIcon className="i" />
            Sign in using google
          </div>
          <div className="facebook">
            <icons.FacebookIcon className="i" />
            Sign in using facebook
          </div>
        </div>
        <div>
          Don't have account? <Link to="#">Sign up</Link>
        </div>
      </form>
    </section>
  );
}

export default SignIn;
