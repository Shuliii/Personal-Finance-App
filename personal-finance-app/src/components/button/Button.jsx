import styles from "./Button.module.css";

const Button = ({ children, variant, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
