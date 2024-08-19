import { ChangeEvent, type FC } from "react";

import { useTranslation } from "react-i18next";

import styles from "./RadioBtnGroup.module.css";

interface RadioBtnGroupProps {
  selectedValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioBtnGroup: FC<RadioBtnGroupProps> = ({
  selectedValue,
  handleChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles["radio-btn-container"]}>
      <label>
        <input
          type="radio"
          name="transaction-type"
          value="income"
          checked={selectedValue === "income"}
          onChange={handleChange}
        />
        {t("income")}
      </label>

      <label>
        <input
          type="radio"
          name="transaction-type"
          value="expense"
          checked={selectedValue === "expense"}
          onChange={handleChange}
        />
        {t("expense")}
      </label>
    </div>
  );
};

export default RadioBtnGroup;
