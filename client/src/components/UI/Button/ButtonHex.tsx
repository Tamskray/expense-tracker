import type { FC } from "react";

import styles from "./ButtonHex.module.css";

interface ButtonHexProps {
  formId: string;
}

const ButtonHex: FC<ButtonHexProps> = ({ formId }) => {
  const handleClick = () => {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <div
      className={styles["btn-container"]}
      onClick={handleClick}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className={styles.hexagon}>
        <div className={styles.plus}>+</div>
      </div>
    </div>
  );
};

export default ButtonHex;
