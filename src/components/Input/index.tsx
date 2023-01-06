import cn from "classnames";
import styles from "./Input.module.css";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  width?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = ({
  id,
  label,
  error,
  icon,
  iconPosition = "right",
  width = "360px",
  className,
  ...props
}: InputProps) => {
  const inputClassName = icon
    ? cn(styles[`input-with-icon-${iconPosition}`], className)
    : cn(styles["input"], className);

  return (
    <div className={styles["input-container"]} style={{ width }}>
      <label htmlFor={id}>{label}</label>

      <div className={styles["input-inner-container"]}>
        <input
          {...props}
          id={id}
          className={inputClassName}
          aria-describedby={`${id}-error`}
          aria-invalid={error ? "true" : "false"}
        />
        {icon && (
          <span className={styles[`input-icon-${iconPosition}`]}>{icon}</span>
        )}
      </div>

      {error && (
        <div id={`${id}-error`} role="alert" className={styles["input-error"]}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
