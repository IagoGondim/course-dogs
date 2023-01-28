import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../useContext/useContext";
import { ReactComponent as MinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFotos } from "../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeclassname={styles.active}>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeclassname={styles.active}>
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar" activeclassname={styles.active}>
        <AdicionarFotos />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
