import { Bs0CircleFill } from "react-icons/bs";
import styles from "./button.module.css";
interface buttonProps {
  children: string;
  onClick: () => void;
  color?: "primary" | "danger" | "success";
}

function Button({ children, onClick, color = "danger" }: buttonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={[styles.btn, styles[`btn-${color}`]].join(" ")}
      >
        {children}
        <Bs0CircleFill color="red" />
      </button>
    </>
  );
}

export default Button;
