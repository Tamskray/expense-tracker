import * as i18n from "i18next";

import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      balance: "Your balance",
      income: "Income",
      expense: "Expense",
      addTransaction: "Add Transaction",
      emptyTransactions: "No transactions yet",
      descriptionPlaceholder: "Description...",
      categoryPlaceholder: "Category...",
    },
  },
  ua: {
    translation: {
      balance: "Поточний баланс",
      income: "Надходження",
      expense: "Витрати",
      addTransaction: "Додати транзакцію",
      emptyTransactions: "Наразі транзакції відсутні",
      descriptionPlaceholder: "Опис...",
      categoryPlaceholder: "Категорія...",
    },
  },
};

const currentLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources,
  lng: currentLanguage ?? "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
