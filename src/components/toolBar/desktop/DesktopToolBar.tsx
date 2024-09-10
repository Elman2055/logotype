import logo from "../../../../public/logo.png";
import favourites from "../../../../public/favourites.png";
import profile from "../../../../public/profile.png";
import { NavLink } from "react-router-dom";
import styles from "./DesktopToolBar.module.css";

const DesktopToolBar = () => {
  return (
    <header className={styles.container}>
      <NavLink to={"/"} className={styles.logoLink}>
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <nav className={styles.navContent}>
        <NavLink to={"category/Минималистичные"}>
          <p>МИНИМАЛИЗМ</p>
        </NavLink>
        <NavLink to={"category/Эмблемы"}>
          <p>ЭМБЛЕМЫ</p>
        </NavLink>
        <NavLink to={"category/Абстрактные"}>
          <p>АБСТРАКЦИЯ</p>
        </NavLink>
        <NavLink to={"category/Векторные"}>
          <p>СТАРТАПЫ</p>
        </NavLink>
        <NavLink to={"category/Типографика"}>
          <p>ТИПОГРАФИКА</p>
        </NavLink>
        <NavLink to={"category/Геометрические"}>
          <p>ЛАКОНИЧНЫЕ</p>
        </NavLink>
      </nav>
      <div className={styles.toolBarImages}>
        <img src={favourites} alt="favourites" className={styles.images} />
        <img
          src={profile}
          alt="profile"
          className={`${styles.images} ${styles.profileImage}`}
        />
      </div>
    </header>
  );
};

export default DesktopToolBar;
