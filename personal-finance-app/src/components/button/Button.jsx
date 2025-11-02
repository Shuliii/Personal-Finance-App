import styles from "./Button.module.css";

const Button = ({children, variant, className, onClick, ...props}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles.className}`}
      onClick={typeof onClick === "function" ? onClick : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
