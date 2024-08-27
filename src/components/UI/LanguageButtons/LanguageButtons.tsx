import type { FC } from "react";

import styles from "./LanguageButtons.module.css";

interface LanguageButtonsProps {
  changeLanguage: (lng: string) => void;
}

const LanguageButtons: FC<LanguageButtonsProps> = ({ changeLanguage }) => {
  return (
    <div className={styles["language-buttons"]}>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ua")}>UA</button>
    </div>
  );
};

export default LanguageButtons;
