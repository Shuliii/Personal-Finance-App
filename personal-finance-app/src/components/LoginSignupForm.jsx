import styles from "./LoginSignupForm.module.css";
import {Link} from "react-router-dom";

const LoginSignUpForm = ({title}) => {
  const textHelper = (
    <p className={styles.helper}>
      {title === "Login" ? (
        <>
          Need to create an account?
          <Link to="/signup"> Sign Up</Link>
        </>
      ) : (
        <>
          Already have an account?
          <Link to="/login"> Log In</Link>
        </>
      )}
    </p>
  );
  return (
    <form className={styles.form}>
      <h1>{title}</h1>
      <div className={styles.formGroup}>
        {title === "Sign Up" && (
          <label>
            Name <input type="text" name="name" />
          </label>
        )}

        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          {title === "Login" ? "Password" : "Create Password"}
          <input type="password" name="password" required />
          {title === "Sign Up" && (
            <small>Password must be at least 8 characters</small>
          )}
        </label>
      </div>
      <button type="submit">
        {title === "Login" ? "Login" : "Create Account"}
      </button>
      {textHelper}
    </form>
  );
};

export default LoginSignUpForm;
