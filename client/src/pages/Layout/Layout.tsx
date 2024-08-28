import { Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";

import LanguageButtons from "@components/UI/LanguageButtons/LanguageButtons";

const Layout = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <>
      <header></header>
      <main>
        <LanguageButtons changeLanguage={changeLanguage} />
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
