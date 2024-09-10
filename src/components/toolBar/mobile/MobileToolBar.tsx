import sideBtn from "../../../../public/sideBtn.png";
import logo from "../../../../public/logo.png";
import profile from "../../../../public/profile.png";
import closeSide from "../../../../public/closeSide.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./mobileToolBar.module.css";

const MobileToolBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.container}>
          <img
            src={sideBtn}
            alt="side-button"
            className={styles.sideBtn}
            onClick={() => setIsOpen(true)}
          />
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className={styles.sideLogo} />
          </NavLink>
          <NavLink to={"/"}>
            <img src={profile} alt="profile" className={styles.sideProfile} />
          </NavLink>
        </header>
      </div>
      <div
        className={`${styles.sidebarWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.closeBlock}>
          <img
            src={closeSide}
            alt="closeSide"
            className={styles.closeSide}
            onClick={() => setIsOpen(false)}
          />
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <ul className={styles.navList}>
          <li>
            <NavLink to={"/"}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Категории</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Избранное</NavLink>
          </li>
        </ul>
        <div className={styles.autorizationBlock}>
          <button className={styles.autorization}>РЕГИСТРАЦИЯ</button>
          <button className={`${styles.autorization} ${styles.login}`}>
            ВХОД
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileToolBar;
