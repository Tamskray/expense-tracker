import * as i18n from "i18next";

import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      balance: "Your balance",
      income: "Income",
      expense: "Expense",
      addTransaction: "Add new transaction",
      emptyTransactions: "No transactions yet",
      descriptionPlaceholder: "Description...",
      categoryPlaceholder: "Category...",
      history: "History",
    },
  },
  ua: {
    translation: {
      balance: "Поточний баланс",
      income: "Надходження",
      expense: "Витрати",
      addTransaction: "Додати нову транзакцію",
      emptyTransactions: "Наразі транзакції відсутні",
      descriptionPlaceholder: "Опис...",
      categoryPlaceholder: "Категорія...",
      history: "Історія",
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
