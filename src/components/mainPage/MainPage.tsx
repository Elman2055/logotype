import mainBg from "../../../public/mainBackground.png";
import downMainBg from "../../../public/downMainBackground.png";
import mobileBg from "../../../public/mainBackgroundMobile.png";
import downMobileBg from "../../../public/downMainBackgroundMobile.png";
import { TMain } from "../../types/types.data";
import useDesktop from "../../hooks/useDesktop";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage = ({ firstRow, minimalism }: TMain) => {
  const isDesktop = useDesktop();
  const navigate = useNavigate();

  const firstRowProduct = isDesktop ? firstRow : firstRow.slice(0, 1);
  const minimalismProduct = isDesktop ? minimalism : minimalism.slice(0, 1);

  return (
    <div className={styles.container}>
      {!isDesktop && (
        <div className={styles.mobileCategories}>
          {[
            { name: "Минимализм", category: "Минималистичные" },
            { name: "Эмблемы", category: "Эмблемы" },
            { name: "Абстракция", category: "Абстрактные" },
            { name: "Типографика", category: "Типографика" },
            { name: "Стартапы", category: "Векторные" },
            { name: "Лаконичные", category: "Геометрические" },
          ].map((el, index) => (
            <button
              key={index}
              onClick={() => navigate({ pathname: `category/${el.category}` })}
            >
              {el.name}
            </button>
          ))}
        </div>
      )}
      <div className={styles.backgroundImageContainer}>
        <img
          src={isDesktop ? mainBg : mobileBg}
          alt="background"
          className={styles.background}
        />
      </div>
      <p className={styles.recomendationTitle}>
        РЕКОМЕНДОВАННЫЕ <br /> ТОВАРЫ
      </p>
      <div className={styles.cardsContainer}>
        {firstRowProduct.map((el) => (
          <div
            key={el.product_id}
            className={styles.card}
            onClick={() => navigate({ pathname: `product/${el.product_id}` })}
          >
            <img
              src={`https://logotype.webshop2.kz/api/products/previewImage/${el.photo_preview}`}
              alt="card"
              className={styles.firstRowCardImage}
            />
            <p>{el.description}</p>
            <p className={styles.price}>{el.price}ТГ</p>
            <button className={styles.buy}>КУПИТЬ</button>
          </div>
        ))}
      </div>
      <div className={styles.backgroundImageContainer}>
        <img
          src={isDesktop ? downMainBg : downMobileBg}
          alt="background"
          className={styles.downBackground}
        />
      </div>
      <p className={`${styles.recomendationTitle} ${styles.minimalism}`}>
        МИНИМАЛИЗМ
      </p>

      <div className={styles.cardsContainer}>
        {minimalismProduct.map((el) => (
          <div
            key={el.product_id}
            className={styles.card}
            onClick={() => navigate({ pathname: `product/${el.product_id}` })}
          >
            <img
              src={`https://logotype.webshop2.kz/api/products/previewImage/${el.photo_preview}`}
              alt="card"
              className={styles.firstRowCardImage}
            />
            <p>{el.description}</p>
            <p className={styles.price}>{el.price}ТГ</p>
            <button className={styles.buy}>КУПИТЬ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
