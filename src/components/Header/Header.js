import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
