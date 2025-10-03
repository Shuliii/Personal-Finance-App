import styles from "./LoginSignupForm.module.css";
import {Link} from "react-router-dom";
import Button from "../components/button/Button";

const LoginSignUpForm = ({title, onSubmit}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  //textHelper for the footer of the card
  const textHelper = (
    <p className={styles.helper}>
      {title === "Login" ? (
        <>
          Need to create an account? <Link to="/signup">Sign Up</Link>
        </>
      ) : (
        <>
          Already have an account? <Link to="/login">Log In</Link>
        </>
      )}
    </p>
  );
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <Button type="submit" variant="primary">
        {title === "Login" ? "Login" : "Create Account"}
      </Button>
      {textHelper}
    </form>
  );
};

export default LoginSignUpForm;
