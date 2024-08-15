import { ChangeEvent, type FC } from "react";

import styles from "./RadioBtnGroup.module.css";

interface RadioBtnGroupProps {
  selectedValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioBtnGroup: FC<RadioBtnGroupProps> = ({
  selectedValue,
  handleChange,
}) => {
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
        Income
      </label>

      <label>
        <input
          type="radio"
          name="transaction-type"
          value="expense"
          checked={selectedValue === "expense"}
          onChange={handleChange}
        />
        Expense
      </label>
    </div>
  );
};

export default RadioBtnGroup;
