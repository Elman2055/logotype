import footerLogo from "../../../public/footerLogo.png";
import whatsapp from "../../../public/whatsapp.png";
import telegram from "../../../public/telegram.png";
import instagram from "../../../public/instagram.png";
import { NavLink } from "react-router-dom";
import useDesktop from "../../hooks/useDesktop";
import styles from "./Footer.module.css";

const Footer = () => {
  const isDesktop = useDesktop();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          {isDesktop ? (
            <img
              src={footerLogo}
              alt="footerLogo"
              className={styles.footerLogo}
            />
          ) : (
            <></>
          )}
          <div className={styles.userFormContainer}>
            <div className={styles.userForm}>
              <input type="text" placeholder="Имя" />
              <input type="email" placeholder="E-mail" />
              <input type="tel" placeholder="Телефон" />
              <input
                type="text"
                style={
                  isDesktop ? { height: "10vw" } : { paddingBottom: "100px" }
                }
                placeholder="Сообщение"
              />
              <div className={styles.check}>
                <input
                  type="checkbox"
                  style={isDesktop ? {} : { marginRight: "10px" }}
                />
                <p>
                  Нажимая кнопку «Отправить», вы принимаете условия Политики
                  конфиденциальности
                </p>
              </div>
              <button className={styles.sendBtn}>ОТПРАВИТЬ</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.downFooter}>
        <div className={styles.downFooterContainer}>
          <div className={styles.downImagesFooter}>
            <img src={whatsapp} alt="whatsapp" />
            <img src={telegram} alt="telegram" />
            <img src={instagram} alt="instagram" />
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.navBorders}>
              <NavLink to={"/"}>
                <p>МИНИМАЛИЗМ</p>
              </NavLink>
              <NavLink to={"/"}>
                <p className={styles.navMargin}>ЭМБЛЕМЫ</p>
              </NavLink>
              <NavLink to={"/"}>
                <p className={styles.navMargin}>АБСТРАКЦИЯ</p>
              </NavLink>
            </div>
            <div className={styles.navBorders}>
              <NavLink to={"/"}>
                <p>СТАРТАПЫ</p>
              </NavLink>
              <NavLink to={"/"}>
                <p className={styles.navMargin}>ТИПОГРАФИКА</p>
              </NavLink>
              <NavLink to={"/"}>
                <p className={styles.navMargin}>ЛАКОНИЧНЫЕ</p>
              </NavLink>
            </div>
            <div className={styles.navLastBorder}>
              <NavLink to={"/"}>
                <p>ПОЧТА : LOGO@GMAIL.COM</p>
              </NavLink>
              <NavLink to={"/"}>
                <p className={styles.navMargin}>ТЕЛЕФОН: +7-707-123-4567</p>
              </NavLink>
            </div>
          </div>
          <div className={styles.downFooterText}>
            <p>© Copyright 2024 Logo</p>

            <a
              href="https://logotype.webshop2.kz/api/products/documents/privacy-policy.pdf"
              target="_blank"
            >
              <p>Политика конфидециальности</p>
            </a>
            <a
              href="https://logotype.webshop2.kz/api/products/documents/public-offer.pdf"
              target="_blank"
            >
              <p>Публичная оферта</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
