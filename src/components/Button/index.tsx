import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "filled" | "outlined" | "text";
}

const Button = ({
  icon = null,
  variant = "filled",
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonClassName = cn(styles[`button-${variant}`], className);

  return (
    <button {...props} className={buttonClassName}>
      {children}
      {icon && <span className={styles["button-icon"]}>{icon}</span>}
    </button>
  );
};

export default Button;
