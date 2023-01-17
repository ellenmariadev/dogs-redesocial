import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import styles from "./header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Título");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
