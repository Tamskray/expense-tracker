import { Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";

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
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ua")}>UA</button>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
